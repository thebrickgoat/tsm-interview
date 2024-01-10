'use client'
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/input";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { API_URL } from "@/constants";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phoneNumber: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .test(
      "phone-number-length",
      "Phone number should be 10 digits",
      (value) => {
        return value?.replace(/\D/g, "").length === 10;
      }
    ),
  message: yup.string().required("Message is required"),
});

const ContactInner = () => {  
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, SetShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onInvalid = (errors: any) => console.error(errors)

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    console.log(data);
    try {
      const { firstName, lastName, email, message, phoneNumber } = data;

      const formData = new FormData();
      formData.set("your-first-name", firstName);
      formData.set("your-last-name", lastName);
      formData.set("your-email", email);
      formData.set("phoneNumber", phoneNumber);
      formData.append("your-message", message);
      const response = await axios.post(API_URL.contactForm, formData);

      if (response.status === 200) {
        showMessage();
        reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const showMessage = () => {
    SetShowSuccess(true);

    setTimeout(() => {
      SetShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact-form" className="px-6 py-12 bg-slate-300 flex-grow">
      <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-4 bg-white rounded-lg shadow-lg p-4">
        <div>
          <Input
            id="firstName"
            label="First Name"
            textarea={false}
            error={errors.firstName}
            required={true}
            type="text"
            phoneInput={false}
            placeholder="First Name"
            {...register("firstName", { required: true })}

          />
        </div>
        <div>
          <Input
            id="lastName"
            label="Last Name"
            textarea={false}
            error={errors.lastName}
            required={true}
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          />
        </div>
        <div>
          <Input
            id="phoneNumber"
            label="Phone Number"
            textarea={false}
            error={errors.phoneNumber}
            required={true}
            type="tel"
            phoneInput={true}
            placeholder="(111) 245-3245"
            {...register("phoneNumber", { required: true })}

          />
        </div>
        <div>
          <Input
            id="email"
            label="Email Address"
            textarea={false}
            error={errors.email}
            required={true}
            type="email"
            phoneInput={false}
            placeholder="email@mail.com"
            {...register("email", { required: true })}

          />
        </div>
        <div>
          <Input
            id="message"
            label="Message"
            textarea={true}
            error={errors.message}
            required={true}
            type="text"
            phoneInput={false}
            placeholder="Let us know how we can help you"
            {...register("message", { required: true })}
          />

        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      </form>
    </section>
  );
};

export default ContactInner;
