import { useState } from "react";
import { Button, Label, TextInput, Radio, Select, FileInput } from 'flowbite-react';
const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        role: '',
        phone: '',
        address: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFormData(prevState => ({
                ...prevState,
                image: e.target.files[0]
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you would typically send the data to your backend
    };

    return (<>
        <div className="max-w-md mx-auto mt-10">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your name" />
                    </div>
                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@flowbite.com"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput
                        id="password"
                        name="password"
                        type="password"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="confirmPassword" value="Confirm password" />
                    </div>
                    <TextInput
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="gender" value="Gender" />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <Radio
                                id="male"
                                name="gender"
                                value="male"
                                onChange={handleChange}
                            />
                            <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="female"
                                name="gender"
                                value="female"
                                onChange={handleChange}
                            />
                            <Label htmlFor="female">Female</Label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="role" value="Select your role" />
                    </div>
                    <Select id="role" name="role" required onChange={handleChange}>
                        <option value="">Choose a role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="moderator">Moderator</option>
                    </Select>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="phone" value="Your phone number" />
                    </div>
                    <TextInput
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (123) 456-7890"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="address" value="Your address" />
                    </div>
                    <TextInput
                        id="address"
                        name="address"
                        type="text"
                        placeholder="123 Main St, City, Country"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="image" value="Upload profile picture" />
                    </div>
                    <FileInput
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                <Button type="submit">Register</Button>
            </form>
        </div>
    </>)
}
export  default RegisterPage;