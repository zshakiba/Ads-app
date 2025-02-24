import SideBarAdmin from "./(SideBar)/SideBarAdmin";
import SideBarAdvertiser from "./(SideBar)/SideBarAdvertiser";
import SideBarDriver from "./(SideBar)/SideBarDriver";
import Header from "./Header";


export const metadata = {
  title: "پروفایل",
  description: "پروفایل",
};

export default function RootLayout({ children }) {
  // فرض کنید نقش کاربر از طریق context یا props دریافت می‌شود
  const userRole = "admin"; // یا "driver" یا "advertiser"

  // انتخاب سایدبار بر اساس نقش کاربر
  const SideBar = () => {
    switch (userRole) {
      case "admin":
        return <SideBarAdmin />;
      case "driver":
        return <SideBarDriver />;
      case "advertiser":
        return <SideBarAdvertiser />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-secondary-0">
      <div className="grid grid-cols-12 h-screen">
        <aside className="col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block">
          <SideBar />
        </aside>
        <div className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
          <Header />
          <main className="bg-secondary-100 rounded-tr-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto">
            <div className="xl:max-w-screen-xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}