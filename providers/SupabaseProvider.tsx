"use client";

import {useState} from "react";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {SessionContextProvider, useSupabaseClient} from "@supabase/auth-helpers-react";

import {Database} from "@/types_db";

type SupabaseProviderProps = {
    children: React.ReactNode
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
    children
}) => {
    const [supabaseClient] = useState(() =>
        createClientComponentClient<Database>()
    )
    return (
        <SessionContextProvider supabaseClient={supabaseClient}>{children}</SessionContextProvider>
    )
}

export default SupabaseProvider