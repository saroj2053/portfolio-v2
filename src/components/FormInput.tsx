import FormikErrorMessage from "./FormikErrorMessage";

export default function FormInput({ label, name, type, placeholder, value, onChange, onBlur, error }: any) {
    const classNames = "w-full border-2 border-foreground  bg-secondary dark:bg-secondary px-3 py-2.5 font-['Google_Sans_Flex']   text-foreground  placeholder:text-[#A09890] dark:placeholder:text-[#6B6560] focus:outline-none focus:border-primary dark:focus:border-primary transition-colors";
  return (
    <div className="mb-4">
      <label className="font-['Ovo'] text-xs font-semibold text-[#6B6560] dark:text-[#A09890] uppercase tracking-widest block mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={classNames}
          rows={5}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={classNames}
        />
      )}
      {error && (
        <FormikErrorMessage errors={error} />
      )}
    </div>
  );
}