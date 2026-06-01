import { DangerousHtml } from "@/components/ui/dangerous-html";

type CloudBuildPeopleType = {
  roleTitle: string;
  roleSubtitle: string;
  message: string;
  description: string;
};
const CloudSliderCard = ({ item }: { item: CloudBuildPeopleType }) => {
  return (
    <div className="rounded-[26px] border border-[#E0E0E0] bg-white p-6 md:p-7 flex flex-col gap-1 h-full">
      {/* Role title */}
      {item?.roleTitle && (
        <DangerousHtml
          html={item.roleTitle}
          className="text-[#2AAC94] text-[20px] md:text-[23px] font-semibold leading-[1.18]
            [&_p]:text-[#2AAC94] [&_p]:font-semibold"
        />
      )}

      {/* Role subtitle */}
      {item?.roleSubtitle && (
        <DangerousHtml
          html={item.roleSubtitle}
          className="text-[#242424] text-[14px] md:text-[15px] font-light leading-[30px] -mt-2
            [&_p]:text-[#242424] [&_p]:font-light"
        />
      )}

      {/* Quote message */}
      {item?.message && (
        <div className="border-l-2 border-[#1B6DD9] pl-4 my-1">
          <DangerousHtml
            html={item.message}
            className="text-[#242424] text-[15px] md:text-[18px] font-light leading-[25px]
              [&_p]:text-[#242424] [&_p]:font-light"
          />
        </div>
      )}

      {/* Description */}
      {item?.description && (
        <DangerousHtml
          html={item.description}
          className="text-[#242424] text-[13px] md:text-[15px] font-light leading-[22px]
            [&_p]:text-[#242424] [&_p]:font-light
            [&_a]:text-[#2AAC94] [&_a]:font-normal [&_strong]:text-[#2AAC94] [&_strong]:font-normal"
        />
      )}
    </div>
  );
};

export default CloudSliderCard;