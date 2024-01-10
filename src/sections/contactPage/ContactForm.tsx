import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { API_URL } from "@/constants";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
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
        console.log(value);
        return value?.replace(/\D/g, "").length === 10;
      }
    ),
  subject: yup.string().required("Subject is required"),
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

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      const { firstName, lastName, email, subject, message, phoneNumber } = data;

      const formData = new FormData();
      formData.set("your-subject", subject);
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white rounded-lg shadow-lg p-4">
        <div>
          <label htmlFor="firstName" className="block">First Name</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
        </div>
        <div>
          <label htmlFor="lastName" className="block">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: true })}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
        </div>
        <div>
          <label htmlFor="phone" className="block">Phone</label>
          <input
            type="tel"
            id="phone"
            {...register("phoneNumber", { required: true })}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber.message}</span>}
        </div>
        <div>
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.email && <span className="text-red-500">{ errors.email.message }</span>}
        </div>
        <div>
          <label htmlFor="message" className="block">Message</label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            className="border border-gray-300 rounded-md p-2 w-full"
          ></textarea>
          {errors.message && <span className="text-red-500">{ errors.message.message}</span>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      </form>
    </section>
  );
};

export default ContactInner;
