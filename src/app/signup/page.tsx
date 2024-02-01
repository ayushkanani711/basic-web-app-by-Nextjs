"use client"

import Link from "../../../node_modules/next/link"
import React, { useState } from "react"
import { useRouter } from "../../../node_modules/next/navigation"
import { axios } from "../../../node_modules/axios/index"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
// import {axios} from "../../../node_modules/axios"

export default function SignUpPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })
  const onSignup = async () => {

  }
  return (

    <div className="m-20">

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <h1>Signup</h1>
        <hr />

        {/* Username */}
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          value={user.username}
          onChange={
            (e) => setUser({ ...user, username: e.target.value })
          }
          placeholder="Username"
        />

        {/* Email */}
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={user.email}
          onChange={
            (e) => setUser({ ...user, email: e.target.value })
          }
          placeholder="Email"
        />

        {/* password */}
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={user.password}
          onChange={
            (e) => setUser({ ...user, password: e.target.value })
          }
          placeholder="Password"
        />

        <Button
          onClick={onSignup}
        >
          Signup
        </Button>

        <p className="text-small-regular text-light-2 text-center mt-2">
          Already have an account?
          <Link
            href="/login"
            className="text-primary-500 text-blue-600 text-lg ml-1">
            Log in
          </Link>
        </p>

      </div>
    </div>
  )
}