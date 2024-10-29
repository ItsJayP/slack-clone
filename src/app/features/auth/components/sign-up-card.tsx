import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SignInFlow } from "../types";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
};

export const SignUpCard = ({ setState } : SignUpCardProps) => {
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>
          Sign Up to continue
        </CardTitle>
      </CardHeader>
      <CardDescription>
        Use your email or another service to continue
      </CardDescription>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input 
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Email"
            type="email"
            required
          />
          <Input 
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Password"
            type="password"
            required
          />
          <Input 
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Confirm Password"
            type="password"
            required
          />
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            className="w-full relative"
            size="lg"
            disabled={false}
            variant="outline"
            onClick={() => {}}
          >
            <FcGoogle className="absolute top-3 left-2.5 size-5" />
            Continue with Google
          </Button>
          <Button
            className="w-full relative"
            size="lg"
            disabled={false}
            variant="outline"
            onClick={() => {}}
          >
            <FaGithub className="absolute top-3 left-2.5 size-5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Already have an account? <span onClick={() =>setState("signIn")} className="text-sky-700 hover:underline cursor-pointer">Sign In</span>
        </p>
      </CardContent>
    </Card>
  )
}
