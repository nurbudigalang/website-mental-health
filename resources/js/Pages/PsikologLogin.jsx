import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function PsikologLogin({ status2, canResetPassword2 }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status2 && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status2}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="w-full h-screen lg:flex md:flex md:justify-center lg:overflow-hidden bg-[#B2D4FB]">
                    {/* left side */}
                    <div className="relative                    
                                    md:w-1/2
                                    md:flex
                                    md:justify-center
                                    md:items-center
                                    lg:h-full
                                    lg:w-1/2 lg:flex lg:flex-col">
                        {/* put left side image here */}
                        <img
                            className="lg:h-full lg:w-full 
                            md:h-full
                            object-cover"
                            src="images/Psikolog Login.png"
                        />
                    </div>

                    {/* right side */}
                    <div className="md:w-3/4
                                    lg:w-1/2 h-full
                                    p-10 md:p-26 lg:p-6 xl:p-10 2xl:p-32
                                    flex flex-col justify-between items-center">
                        <div className="w-full flex flex-col 
                                        max-w-[715px] 
                                        pt-0 sm:pt-8 sm:px-14 sm:pb-16
                                        bg-white rounded-2xl">
                            {/* title */}

                            <div className="w-full flex flex-col 
                                            max-w-[500px] 
                                            sm:pt-10 md:pt-5 lg:pt-10">
                                {/* text-lg sm:text-xl md:text-2xl lg:text-3xl */}
                                {/*  className='w-full flex flex-col' */}
                                <h1 className="text-primary 
                                                text-2xl
                                                lg:text-[48px] font-bold 
                                                sm:mb-2 lg:mb-5">
                                    Welcome Psikolog
                                </h1>
                                <p className="text-[#333333] 
                                                text-lg 
                                                sm:text-base 
                                                md:text-xl
                                                font-semibold 
                                                lg:mb-7 pl-1 sm:pb-10">
                                    Ready to help the customer to find the solution
                                </p>
                            </div>

                            {/* login box -> w594 h60 */}
                            <div className="w-full flex flex-col">
                                <div className="w-full mt-4 pb-10">
                                    <InputLabel htmlFor="email" />

                                    <TextInput
                                        id="email"
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mb-12">
                                    <InputLabel htmlFor="password" />

                                    <TextInput
                                        id="password"
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                {/* max-w-[1240px] mx-auto grid lg:grid-cols-3 */}
                                <div className="mb-10 flex justify-between">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    "remember",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <span className="font-semibold text-sm text-gray-600 ml-2">
                                            Remember Me
                                        </span>
                                    </label>
                                    
                                    {canResetPassword2 || (
                                        <Link
                                            href={route("password.request")}
                                            className="font-semibold text-sm text-primary hover:text-[#2d8efd] rounded-md"
                                        >
                                            Forgot Password?
                                        </Link>
                                    )}
                                </div>

                                <div>
                                    <PrimaryButton
                                        className="bg-primary mb-5"
                                        disabled={processing}
                                    >
                                        Log In
                                    </PrimaryButton>
                                </div>

                                <div className="flex justify-center mt-4">
                                    {canResetPassword2 && (
                                        <Link
                                            href={route("register")}
                                            className="font-semibold text-sm text-gray-600 hover:text-gray-900 rounded-md"
                                        >
                                            Don’t have an account?{" "}
                                            <span className="text-primary">
                                                Sign up for free
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
