"use client";
import React from "react";

interface SapQuestionnaireFormLabel {
  [key: string]: string;
}

const SapQuestionnaire = ({ data }: { data: SapQuestionnaireType }) => {
  const labels: SapQuestionnaireFormLabel =
    data?.sap_questionnaire_form_label?.formLabel?.[0];

  // Convert questions dynamically
  const questions = Object.keys(labels || {})
    .filter((key) => key.startsWith("question"))
    .map((key) => labels[key]);

  const options = ["Yes", "No", "Maybe", "Not sure"];

  return (
    <div className="container-md  max-w-4xl mx-autopy-16">
      <div className="bg-[#f4f4f4] p-10 rounded-lg">
        {/* Name + Email */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-md md:test-[18px] font-semibold mb-2">
              {labels?.nameLabel}
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-md md:test-[18px] mb-2 font-semibold">
              {labels?.emailLabel}
            </label>
            <input
              type="email"
              className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
            />
          </div>
        </div>

        {/* Designation */}
        <div className="mb-10">
          <label className="block text-md md:test-[18px] mb-2 font-semibold">
            {labels?.designationLabel}
          </label>
          <input
            type="text"
            className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
          />
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {questions.map((question: string, index: number) => (
            <div key={index}>
              <p className=" text-md md:test-[18px] mb-4 font-semibold">
                {index + 1}. {question}
              </p>

              <div className="flex flex-wrap gap-6">
                {options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer "
                  >
                    <input
                      type="radio"
                      name="q1"
                      className="appearance-none w-4 h-4 rounded-full border border-gray-400 bg-[#f4f4f4]
  checked:border-blue-600
  checked:shadow-[inset_0_0_0_4px_#2563eb]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Message */}
        <div className="mt-10">
          <label className="block mb-2">{labels?.messageLabel}</label>
          <textarea
            rows={4}
            className="w-full border border-gray-400 p-3 bg-transparent rounded"
          />
        </div>

        {/* Submit */}
        <button className="mt-8 bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SapQuestionnaire;
