"use client";
import React from "react";
import { Button } from "../ui/button";

import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema, type ContactFormData } from "@/utils/validation.schema";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const { control } = useForm<ContactFormData>({
    mode: "onSubmit",
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      organization: "",
    },
  });
  return (
    <div className="grid shadow-xl p-10 gap-y-8 w-3/4">
      <h1 className="text-5xl font-semibold text-center text-foreground">
        Book a Demo
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 ">
        <Input
          control={control}
          name="fullName"
          placeholder="Full name"
          className="border-2 p-2 rounded-md text-foreground"
        />
        <Input
          control={control}
          name="Organization"
          placeholder="Organization"
          className="border-2 p-2 rounded-md text-foreground"
        />
      </div>
      {/* Row 2: Organization and Phone */}
      <div className="grid grid-cols-1  gap-x-12 ">
        {" "}
        <Input
          control={control}
          name="email"
          placeholder="Email ID"
          className="border-2 p-2 rounded-md text-foreground"
        />
      </div>
      {/* Submit button */}
      <div className="pt-4">
        <Button
          size={"lg"}
          variant={"outline"}
          className="hover:bg-primary border-primary text-primary hover:text-white"
          arrow
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;
