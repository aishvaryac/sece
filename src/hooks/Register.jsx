
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(3, "Name must have minimum 3 letters"),
  email: z.string().email("Enter valid email"),
  password: z.string().min(8, "Password must contain at least 8 characters")
});

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = registerSchema.safeParse(formData);

    if (result.success) {
      alert("Registration Successful!");
      console.log("Validation Success!");
      console.log(formData);
    } else {
      alert(result.error.issues[0].message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        <div>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <div>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>

        <Button type="submit" className="w-full">
          Register
        </Button>

      </form>
    </div>
  );
};

export default Register;
