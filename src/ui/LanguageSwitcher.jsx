import { useRouter } from "next/navigation";
import Button from "./Button";
import { LanguageIcon } from "@heroicons/react/24/outline";

export default function LanguageSwitcher() {
//   const router = useRouter();

//   const changeLanguage = (locale) => {
//     router.push(router.asPath, undefined, { locale });
//   };

  return (
    <div>
        <LanguageIcon className="w-5 h-5 text-primary-900" onClick={() => changeLanguage("en")}/>
    </div>
  );
}
