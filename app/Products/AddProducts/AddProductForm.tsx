"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

type ProductFormValues = {
  ProductName: string;
  Price: string;
  Description: string;
  KeyFeatures: string;
  Specifications: string;
  ProductDetails: string;
  ProductImages: string;
  category: string;
  subcategory: string;
  brand: string;
};
interface InputField {
  label: string;
  name: keyof ProductFormValues;
  type: "text" | "number";
  placeholder: string;
  required: boolean;
}

const AddProductForm = () => {
  const formSchema = z.object({
    ProductName: z.string().min(2, {
      message: "Product name must be at least 2 characters.",
    }),
    Price: z.string().min(1, {
      message: "Price must be a positive number.",
    }),
    Description: z.string().min(10, {
      message: "Description must be at least 10 characters.",
    }),
    KeyFeatures: z.string().min(10, {
      message: "KeyFeatures must be at least 10 characters.",
    }),
    Specifications: z.string().min(10, {
      message: "Specifications must be at least 10 characters.",
    }),
    ProductDetails: z.string().min(10, {
      message: "ProductDetails must be at least 10 characters.",
    }),
    ProductImages: z.string().min(10, {
      message: "ProductImages must be at least 10 characters.",
    }),
    category: z.string().min(2, {
      message: "category must be at least 10 characters.",
    }),
    subcategory: z.string().min(2, {
      message: "subcategory must be at least 10 characters.",
    }),
    brand: z.string().min(2, {
      message: "brand must be at least 10 characters.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ProductName: "",
      Description: "",
      Price: "",
      KeyFeatures: "",
      Specifications: "",
      ProductDetails: "",
      ProductImages: "",
      category: "",
      subcategory: "",
      brand: "",
    },
  });

  const formInputs: InputField[] = [
    {
      label: "Product Name",
      name: "ProductName", // Corrected field name
      type: "text",
      placeholder: "Product Name",
      required: true,
    },
    {
      label: "Price",
      name: "Price", // Corrected field name
      type: "number",
      placeholder: "Price",
      required: true,
    },
    {
      label: "Description",
      name: "Description", // Corrected field name
      type: "text",
      placeholder: "Description",
      required: true,
    },
    {
      label: "KeyFeatures",
      name: "KeyFeatures", // Corrected field name
      type: "text",
      placeholder: "KeyFeatures",
      required: true,
    },
    {
      label: "Specifications",
      name: "Specifications", // Corrected field name
      type: "text",
      placeholder: "Specifications",
      required: true,
    },
    {
      label: "ProductDetails",
      name: "ProductDetails", // Corrected field name
      type: "text",
      placeholder: "ProductDetails",
      required: true,
    },
    {
      label: "ProductImages",
      name: "ProductImages", // Corrected field name
      type: "text",
      placeholder: "ProductImages",
      required: true,
    },
    {
      label: "category",
      name: "category", // Corrected field name
      type: "text",
      placeholder: "category",
      required: true,
    },
    {
      label: "subcategory",
      name: "subcategory", // Corrected field name
      type: "text",
      placeholder: "subcategory",
      required: true,
    },
    {
      label: "brand",
      name: "brand", // Corrected field name
      type: "text",
      placeholder: "brand",
      required: true,
    },
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="justify-start px-4 mr-10 md:mr-20 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8 text-2xl text-black "
        >
          {formInputs.map((input, index) => (
            <FormField
              key={index}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem className="text-black ">
                  <FormLabel>{input.label}</FormLabel>
                  <FormControl>
                    {
                      // if  descriptionKeyFeatures: "",or
                      //   Specifications: "",
                      //   ProductDetails: "",
                      //   ProductImages: "",
                      // Description:
                      // show textarea
                      // else
                      // show Input

                      input.name === "Description" ||
                      input.name === "Specifications" ||
                      input.name === "ProductDetails" ||
                      input.name === "KeyFeatures" ? (
                        <Textarea
                          {...field}
                          placeholder={input.placeholder}
                          className="text-black "
                        />
                      ) : (
                        <Input
                          type={input.type}
                          {...field}
                          placeholder={input.placeholder}
                        />
                      )
                    }
                  </FormControl>
                  <FormDescription className="font-medium text-black ">
                    {input.label}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddProductForm;
