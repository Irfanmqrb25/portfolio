import * as React from "react";
import SignInButton from "@/components/button/SignInButton";
import FormGuestbook from "@/components/form/FormGuestbook";
import { getCurrentUser } from "@/lib/session";
import SignOutButton from "@/components/button/SignOutButton";
import ChattItemList from "@/components/ChattItemList";

const GuestBookPage = async () => {
  const user = await getCurrentUser();

  return (
    <div className="flex flex-col mt-4 md:mt-0 mb-10 mx-auto md:mx-4 gap-5 xs:gap-6 md:gap-7 xl:gap-2 2xl:gap-5 w-full">
      <div className="flex flex-col font-montserrat space-y-5 mx-auto items-center md:items-start md:mx-4 w-full">
        <h1 className="text-xl xxs:text-2xl xl:text-4xl font-bold py-2">
          Guestbook
        </h1>
        <div className="w-[80%] space-y-3">
          {user ? (
            <div className="flex flex-col space-y-3 w-full">
              <FormGuestbook name={String(user?.name)} />
              <SignOutButton />
            </div>
          ) : (
            <SignInButton />
          )}
        </div>
        <ChattItemList
          image={user ? String(user?.image) : "/assets/guest-avatar.png"}
        />
      </div>
    </div>
  );
};

export default GuestBookPage;
