const ContactInfo = ({ phone, email }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-secondary-600">اطلاعات تماس</h2>
      <div className="mt-4 space-y-2">
        <p className="text-sm text-secondary-600">
          <span className="font-bold">تلفن:</span> {phone}
        </p>
        <p className="text-sm text-secondary-600">
          <span className="font-bold">ایمیل:</span> {email}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
