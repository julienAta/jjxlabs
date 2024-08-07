import React from "react";
import Link from "next/link";

import Form from "@/components/Form";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section
          id="home"
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 pt-20 min-h-[100dvh] flex items-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Web Development Solutions for Your Business
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  From static websites to complex web applications, I deliver
                  tailored solutions to help your business thrive online.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#services">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 min-h-[80dvh] flex items-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Services
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Static Websites</CardTitle>
                  <CardDescription>
                    Fast, responsive, and SEO-friendly websites
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Perfect for small businesses, portfolios, and landing pages.
                  Built with modern technologies for optimal performance.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Web Applications</CardTitle>
                  <CardDescription>
                    Dynamic and interactive web solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Custom web applications tailored to your business needs. From
                  e-commerce platforms to content management systems.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Full-Stack Development</CardTitle>
                  <CardDescription>
                    End-to-end web development services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Comprehensive solutions covering both front-end and back-end
                  development, database design, and API integrations.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Elevate Your Web Presence?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let&apos;s discuss your project and create a web solution that
                drives your business forward.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Form />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 jjx. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/terms-of-service"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/privacy"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
