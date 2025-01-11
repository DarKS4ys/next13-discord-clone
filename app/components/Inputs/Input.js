    import clsx from "clsx";
    import { 
        FieldErrors, 
        FieldValues, 
        UseFormRegister 
      } from "react-hook-form";

    const Input = ({
        label,
        id,
        type,
        required,
        register,
        errors,
        disabled,
    }) => {
        return (
            <div>
                <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={id}>
                    {label}
                </label>
                <div className="mt-2"><input
            id={id}
            type={type}
            autoComplete={id}
            disabled={disabled}
            {...register(id, { required })}/></div>
            </div>
        );
    };

    export default Input;