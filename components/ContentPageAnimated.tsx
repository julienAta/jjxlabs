"use client";
import React from "react";

import { useInView, animated, useSpring } from "@react-spring/web";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { Separator } from "@/components/ui/separator";
import TrailAnimation from "@/components/trailAnimation";
import TrailAnimation2 from "@/components/trailAnimation2";
import HomeAnimation from "@/components/HomeAnimation";
import { Button } from "@/components/ui/button";
import scrollToTop from "@/components/scrollToTop";

function ContentPageAnimated() {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
    }
  );
  const [ref2, springs2] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
    }
  );
  const [ref3, springs3] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
    }
  );
  const [ref4, springs4] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
        once: true,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
    }
  );
  const [ref5, springs5] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
        delay: 500,
      },
    }),
    {
      rootMargin: "0% 0%",
      once: true,
    }
  );

  const [ref6, springs6] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -100,
      },
      to: {
        opacity: 1,
        x: 0,
        delay: 500,
      },
    }),

    {
      rootMargin: "0% 0%",
      once: true,
    }
  );
  const [ref7, springs7] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: -100,
      },
      to: {
        opacity: 1,
        y: 0,
        delay: 200,
      },
    }),

    {
      rootMargin: "0% 0%",
    }
  );
  return (
    <>
      <div className=" flex flex-col items-center h-screen ">
        <animated.div className="" ref={ref7} style={springs7}>
          <CardHeader className="w-full items-center">
            <CardTitle className=" text-xl lg:text-3xl md:my-16 ">
              The tech i love to code with
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
        </animated.div>
        <div className="flex w-full ">
          <animated.div className="w-1/2" ref={ref6} style={springs6}>
            <CardContent className="Card-Content w-full">
              <Card className="mt-5 pb-3 pt-1 card1">
                <CardHeader className="text-center">
                  <CardTitle>Javascript </CardTitle>
                  <CardDescription className="text-center  h-16 sm:h-5">
                    One of the best web computer language
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="mt-5 pb-3 pt-1 card1">
                <CardHeader className="text-center">
                  <CardTitle className="">React / NodeJS</CardTitle>
                  <CardDescription className="text-center h-16 sm:h-5">
                    Fast app with a nodeJS API and react components
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className=" mt-5 pb-3 pt-1 card3">
                <CardHeader className="text-center">
                  <CardTitle>Tailwind / Redux / Shadcn</CardTitle>
                  <CardDescription className="text-center h-16 sm:h-5">
                    Making my app simple but elegant
                  </CardDescription>
                </CardHeader>
              </Card>
            </CardContent>
          </animated.div>
          <animated.div className="w-1/2" ref={ref5} style={springs5}>
            <CardContent className="Card-Content w-full">
              <Card className=" mt-5 pb-3 pt-1 card1">
                <CardHeader className="text-center">
                  <CardTitle className="">Typescript</CardTitle>
                  <CardDescription className="text-center h-16 sm:h-5">
                    Secured app with type safety
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className=" mt-5 pb-3 pt-1 card1">
                <CardHeader className="items-center">
                  <CardTitle className="">NextJS</CardTitle>
                  <CardDescription className="text-center h-16 sm:h-5">
                    Server components
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="mt-5 pb-3 pt-1 card3">
                <CardHeader className="text-center">
                  <CardTitle>Prisma / Drizzle</CardTitle>
                  <CardDescription className="text-center h-16 sm:h-5">
                    ORM for database work
                  </CardDescription>
                </CardHeader>
              </Card>
            </CardContent>
          </animated.div>
        </div>
        <div className=" w-full hidden sm:flex text-center justify-center mt-16  p-10">
          <Button className="buttonFadeIn">
            <LinkScroll
              className="text-center"
              activeClass="active"
              href="projects"
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              View some of my projects
            </LinkScroll>
          </Button>
        </div>
      </div>
      <Separator className="mt-10 mb-10" id="projects" />
      <animated.div ref={ref} style={springs}>
        <CardHeader>
          <CardTitle className="cardContent2 text-xl lg:text-3xl">
            Projects
          </CardTitle>
        </CardHeader>
      </animated.div>

      <CardContent className="cardContent2 p-0 space-y-10">
        <animated.div ref={ref} style={springs}>
          <Card className="w-4/4 mt-5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Tennis court reservation app
              </CardTitle>
              <CardDescription className="lg:hidden">
                This app use credential authentification and allow you to check
                if a session is available the day you want to reserve a court. I
                used NextJS, TypeScript, Tailwind, tRPC and Prisma to build this
                app and a SQL database.
              </CardDescription>
            </CardHeader>
            <div className="flex">
              <div className="text-xl font-bold p-10 space-y-5 lg:w-1/4 w-1/2 text-center lg:block hidden">
                <p>Next.js</p>
                <p>TypeScript</p>
                <p>tRPC</p>
                <p>Prisma</p>
                <p>Tailwind</p>
                <p>NextAuth</p>
              </div>

              <CardContent className="pt-5 hidden lg:block  w-2/4">
                <Image
                  className=" "
                  width={700}
                  height={500}
                  src="https://i.goopics.net/v9bqb3.png"
                  alt="screenshot of a beautiful website use for reservation"
                />
              </CardContent>
              <div className="text-xl p-10 font-bold space-y-5 text-center sm:w-1/4 w-1/2 lg:block hidden  ">
                <p>Credential authentification</p>
                <p>Check sessions available for the day clicked</p>
                <p>Reserve your session easily</p>
                <p>Admin dashboard</p>
              </div>
            </div>
            <div className="flex justify-center p-5">
              <Button className="">
                <Link
                  className="flex justify-center p-5"
                  href="https://nextcourt.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Try it
                </Link>
              </Button>
            </div>
          </Card>
        </animated.div>

        <animated.div ref={ref3} style={springs3}>
          <Card className="w-4/4 mt-5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">E-commerce market</CardTitle>

              <CardDescription className="lg:hidden">
                This app allow you to showcase and sell the products that you
                manage in the dashboard bellow. It accepts payments via Stripe.
                You can use the public API provide by the dashboard to link the
                e-commerce and the dashboard.
              </CardDescription>
            </CardHeader>
            <div className="flex    ">
              <div className="text-xl font-bold p-10 space-y-5 lg:w-1/4 w-1/2 text-center  lg:block hidden ">
                <p>Next.js</p>
                <p>TypeScript</p>
                <p>Prisma</p>
                <p>Tailwind</p>
                <p>Shadcn</p>
                <p>Clerk</p>
              </div>

              <CardContent className="pt-5 hidden lg:block  w-2/4">
                <Image
                  className=" "
                  width={700}
                  height={500}
                  src="https://i.goopics.net/y5thji.png"
                  alt="screenshot of a beautiful e-commerce website"
                />
              </CardContent>
              <div className="text-xl font-bold p-10 space-y-5 text-center sm:w-1/4 w-1/2  lg:block hidden  ">
                <p>Simple marketplace</p>
                <p>People can buy the products added from your dashboard</p>
                <p>Stripe payment</p>
                <p>Filter products</p>
              </div>
            </div>
            <div className="flex justify-center p-5">
              <Button className="">
                <Link
                  className="flex justify-center p-5"
                  href="https://jjxstore-client.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Try it
                </Link>
              </Button>
            </div>
          </Card>
        </animated.div>
        <animated.div ref={ref4} style={springs4}>
          <Card className="w-4/4 mt-5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">E-commerce dashboard</CardTitle>
              <CardDescription className="lg:hidden">
                A dashboard that allows you to manage multiple stores and their
                products.
              </CardDescription>
              <CardDescription>
                Demo account linked to the store:
                demojjxlabs@gmail.com:3iBPM7ActvEk7RJ
              </CardDescription>
            </CardHeader>
            <div className="flex    ">
              <div className="text-xl font-bold p-10 space-y-5 lg:w-1/4 w-1/2 text-center  lg:block hidden ">
                <p>Next.js</p>
                <p>TypeScript</p>
                <p>Prisma</p>
                <p>Tailwind</p>
                <p>Shadcn</p>
                <p>Clerk</p>
              </div>

              <CardContent className="pt-5 hidden lg:block  w-2/4">
                <Image
                  className=" "
                  width={700}
                  height={500}
                  src="https://i.goopics.net/kkw25z.png"
                  alt="screenshot of a beautiful dashboard used to manage a store"
                />
              </CardContent>
              <div className="text-xl p-10 space-y-5 font-bold text-center sm:w-1/4 w-1/2   lg:block hidden ">
                <p>Google authentification</p>
                <p>Manage multiple stores</p>
                <p>Add products to the stores</p>
                <p>Manage the orders from your stores</p>
              </div>
            </div>
            <div className="flex justify-center p-5">
              <Button>
                <Link
                  className="flex justify-center p-5"
                  href="https://jjxstore-admin.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Try it
                </Link>
              </Button>
            </div>
          </Card>
        </animated.div>
        <animated.div ref={ref2} style={springs2}>
          <Card className="w-4/4 mt-5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Reddit clone</CardTitle>
              <CardDescription className="lg:hidden">
                This app use google authentification and allow you to create a
                community so you and others user can create post and interact
                with them. I used NextJS, TypeScript, Tailwind and Prisma to
                build this app and a SQL database.
              </CardDescription>
            </CardHeader>
            <div className="flex    ">
              <div className="text-xl p-10 font-bold space-y-5 lg:w-1/4 w-1/2 text-center  lg:block hidden">
                <p>Next.js</p>
                <p>TypeScript</p>
                <p>Prisma</p>
                <p>Tailwind</p>
                <p>Shadcn</p>
                <p>ClerkAuth</p>
              </div>

              <CardContent className="pt-5 hidden lg:block  w-2/4">
                <Image
                  width={700}
                  height={500}
                  src="https://i.goopics.net/7bf8q7.png"
                  alt="screenshot of a beautiful website similar to reddit"
                />
              </CardContent>
              <div className="text-xl p-10 space-y-5 font-bold text-center sm:w-1/4 w-1/2  lg:block hidden ">
                <p>Google authentification</p>
                <p>Create a community so people can join it</p>
                <p>Add posts to the community so users can interact with it</p>
              </div>
            </div>
            <div className="flex justify-center p-5">
              <Button className="">
                <Link
                  className="flex justify-center p-5"
                  href="https://reddint.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Try it
                </Link>
              </Button>
            </div>
          </Card>
        </animated.div>
        <Card className="w-4/4 mt-5">
          <CardHeader id="payment">
            <CardTitle>AI SaaS platform</CardTitle>
            <CardDescription>Coming very soon.</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </CardContent>
    </>
  );
}

export default ContentPageAnimated;