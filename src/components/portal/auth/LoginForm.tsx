import { cn } from "@/lib/utils"
import { Button } from "@/components/elements/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/elements/card"
import { Input } from "@/components/elements/input"
import { Label } from "@/components/elements/label"
import React from "react"
import { Link, useNavigate } from "react-router"
import { useForm } from "react-hook-form"

type LoginFormType = {
    props?: any
    className?: string
}
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormSchema } from "./schemas"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../../elements/form"

const LoginForm: React.FC<LoginFormType> = ({ className, props }) => {
    const navigate = useNavigate()
    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (data: z.infer<typeof LoginFormSchema>) => {
        console.log("Form submitted with data:", data)
        navigate('/app')   
    }


    return (
        <div className={cn("h-full flex items-center justify-center", className)} {...props}>
            <Card className="w-md mx-auto mt-10 border-0 shadow-none">
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid gap-6">
                                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                    <span className="bg-card text-muted-foreground relative z-10 px-2">
                                        Login with your Credentials
                                    </span>
                                </div>
                                <div className="grid gap-6">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="shadcn" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>
                                            <Link
                                                to="/auth/forgot-password"
                                                className="ml-auto text-sm underline-offset-4 hover:underline"
                                            >
                                                Forgot your password?
                                            </Link>
                                        </div>
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input type='password' placeholder="shadcn" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <Button variant='default' type="submit" className="w-full">
                                        Login
                                    </Button>
                                </div>
                                <div className="text-center text-sm">
                                    Don&apos;t have an account?{" "}
                                    <Link to="/auth/signup" className="underline underline-offset-4">
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginForm;
