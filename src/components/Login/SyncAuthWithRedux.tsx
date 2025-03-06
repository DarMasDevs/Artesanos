"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { loginUser, logoutUser } from "@/redux/features/userSlice";

const SyncAuthWithRedux = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user) {
     
      dispatch(loginUser(session.user));
    } else {
    
      dispatch(logoutUser());
    }
  }, [session, dispatch]);

  return null;
};

export default SyncAuthWithRedux;