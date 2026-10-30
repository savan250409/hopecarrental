"use client";

import { useEffect, useState } from "react";
import PrivacyPolicyDialog from "./PrivacyPolicyDialog";

export default function PrivacyPolicyController() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openPolicy = () => setOpen(true);
    window.addEventListener("privacy:open", openPolicy);
    return () => window.removeEventListener("privacy:open", openPolicy);
  }, []);

  return open ? <PrivacyPolicyDialog onClose={() => setOpen(false)} /> : null;
}
