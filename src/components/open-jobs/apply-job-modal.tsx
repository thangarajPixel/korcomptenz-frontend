"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type ApplyJobModalProps = {
  jobId: string;
  jobTitle: string;
  /** Optional: override button label/classes if you drop this in elsewhere */
  triggerClassName?: string;
};

export function ApplyJobModal({
  jobId,
  jobTitle,
  triggerClassName = "bg-[#26A17D] text-white px-8 py-3 rounded-full",
}: ApplyJobModalProps) {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const [applyLoading, setApplyLoading] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const [applyError, setApplyError] = useState<string | null>(null);
  const [resumeBase64, setResumeBase64] = useState("");

  const [applyData, setApplyData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    email: "",
    date_of_birth: "",
    phone: "",
  });

  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  }

  function convertResumeToBase64(file: File) {
    if (file.size > 2 * 1024 * 1024) {
      alert("Resume must be under 2MB");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const base64Result = reader.result as string;
      const cleanedBase64 = base64Result.split(",")[1];
      setResumeBase64(cleanedBase64);
    };

    reader.onerror = () => {
      alert("Failed to read resume file");
    };

    reader.readAsDataURL(file);
  }

  async function applyJob() {
    if (!jobId) {
      setApplyError("Invalid job selection. Please reopen the job.");
      return;
    }

    if (!applyData.email.trim()) {
      setApplyError("Email is required.");
      return;
    }

    if (!isValidEmail(applyData.email)) {
      setApplyError("Please enter a valid email address.");
      return;
    }

    setApplyError(null);

    const payload = {
      job_id: jobId,
      first_name: applyData.firstname,
      middle_name: applyData.middlename,
      last_name: applyData.lastname,
      gender: applyData.gender,
      email: applyData.email,
      dob: applyData.date_of_birth, // YYYY-MM-DD
      mobile_number: applyData.phone,
      resume: resumeBase64, // ✅ Base64
    };

    setApplyLoading(true);

    try {
      const res = await fetch("/api/job-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok || result.status === "error") {
        setApplyError(
          result.message || "Application failed. Please try again.",
        );
        setApplySuccess(false);
        return;
      }

      setApplyError(null);
      setApplySuccess(true);

      if (result.status !== "success") {
        alert(result.message);
      }
    } catch {
      setApplyError("Something went wrong. Please try again.");
    } finally {
      setApplyLoading(false);
    }
  }

  function closeModal() {
    setIsApplyOpen(false);
    // Reset state so re-opening starts fresh
    setApplySuccess(false);
    setApplyError(null);
  }

  return (
    <>
      <div className="mt-8 flex justify-center">
        <Button
          type="button"
          className={triggerClassName}
          onClick={() => setIsApplyOpen(true)}
        >
          Apply Now →
        </Button>
      </div>

      {isApplyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#26A17D] text-white hover:bg-[#1f8a68] transition-colors shadow-md"
            >
              ✕
            </button>

            <h3 className="text-3xl font-semibold mb-6 text-center">
              Apply for {jobTitle}
            </h3>
            <p className="text-center mb-5">
              Calling all talented individuals! We’re on the hunt for new team
              members to join our growing company. If you’re passionate,
              hardworking, and ready for a challenge, we want to hear from you.
              Submit your resume now and let’s build something amazing together!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="w-full border p-2 rounded"
                  value={applyData.firstname}
                  onChange={(e) =>
                    setApplyData({ ...applyData, firstname: e.target.value })
                  }
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="w-full border p-2 rounded"
                  value={applyData.lastname}
                  onChange={(e) =>
                    setApplyData({ ...applyData, lastname: e.target.value })
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>

                <input
                  required
                  type="email"
                  className={`w-full border p-2 rounded ${
                    applyError ? "border-red-500" : ""
                  }`}
                  value={applyData.email}
                  onChange={(e) => {
                    setApplyData({ ...applyData, email: e.target.value });
                    setApplyError(null);
                  }}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="w-full border p-2 rounded"
                  value={applyData.phone}
                  onChange={(e) =>
                    setApplyData({ ...applyData, phone: e.target.value })
                  }
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Date of Birth
                </label>
                <input
                  required
                  type="date"
                  className="w-full border p-2 rounded"
                  value={applyData.date_of_birth}
                  onChange={(e) =>
                    setApplyData({
                      ...applyData,
                      date_of_birth: e.target.value,
                    })
                  }
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full border p-2 rounded"
                  value={applyData.gender}
                  onChange={(e) =>
                    setApplyData({ ...applyData, gender: e.target.value })
                  }
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Resume */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Upload Resume (PDF / DOC){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full border p-2 rounded"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      convertResumeToBase64(e.target.files[0]);
                    }
                  }}
                />
              </div>
            </div>

            {/* Submit */}
            <Button
              type="button"
              onClick={applyJob}
              disabled={applyLoading || applySuccess}
              className="mt-6"
            >
              {applySuccess
                ? "Application Submitted"
                : applyLoading
                  ? "Submitting..."
                  : "Submit your application"}
            </Button>

            {/* ✅ Success Message */}
            {applySuccess && (
              <p className="mt-3 text-sm text-green-600 font-medium">
                ✅ Application submitted successfully.
              </p>
            )}

            {/* ❌ Error Message */}
            {applyError && (
              <p className="mt-3 text-sm text-red-600 font-medium">
                ❌ {applyError}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ApplyJobModal;
