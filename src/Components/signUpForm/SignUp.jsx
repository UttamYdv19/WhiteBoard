import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";

export default function SignUp() {
  const signUpFormSchema = z.object({
    fullName: z.string( "please enter your name"),

    email: z
      .string( "please enter string")
      .email("enter valid email"),

    number: z
    .string("Please enter number")
    .regex(/^\d{10}$/, "Please enter a valid 10-digit number"),

    password: z
      .string(" please enter password" )
      .min(8, "password should be 8 characters"),
  });

  const form = useForm({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit = (data) => {
  console.log(data)
  form.reset()
  }
  return (
    <div className="flex justify-center items-center mt-50  ">
      <Card className="">
        <CardHeader className="space-y-1">
          <CardTitle className="justify-center flex text-2xl">
            Welcome User
          </CardTitle>
        </CardHeader>
        <CardContent >
          <Form {...form}  onSubmit={form.handleSubmit(onSubmit)}  className="space-y-4 gap-5 py-10">
            <form >
              <FormField
                control={form.control}
                name="fullName"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>FullName</FormLabel>
                    <FormControl>
                    <Input
                      placeholder="enter your name"
                      {...field}
                      className="my-2 w-100"
                    />
                    </FormControl>
                    <FormMessage className="my-1"/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                   <FormControl>
                   <Input
                      placeholder="username@email.com"
                      {...field}
                      className="my-2 w-100"
                    />
                   </FormControl>
                    <FormMessage className="my-1"/>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="number"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Number</FormLabel>
                   <FormControl>
                   <Input
                      placeholder="enter your phone number"
                      {...field}
                      className="my-2 w-100"
                    />
                   </FormControl>
                    <FormMessage className="my-1"/>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                    <Input
                        type="password"
                      placeholder="enter new password"
                      {...field}
                      className="my-2 w-100"
                    />
                    </FormControl>
                    <FormMessage className="my-1"/>
                  </FormItem>
                )}
              ></FormField>
             <div className="flex justify-between gap-5">
              <Button type="reset"
                className="flex items-center mt-10 w-50"
                onClick={()=>form.reset()}
              >
                Reset
              </Button>
             <Button type="submit"
                className="flex items-center mt-10 w-50"
              >
                Submit
              </Button>
             </div>
              
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
