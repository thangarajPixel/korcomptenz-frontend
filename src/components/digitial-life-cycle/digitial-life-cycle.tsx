import CrmOfferingsSection from "./_utils/crm-offering";
import OutcomesSection from "./_utils/outcomes-section";

import ClosingSection from "./_utils/closing-section";

export default function digitialLifeCycle({
  data,
}: {
  data: DigitialLifeCycleType;
}) {
  return (
    <main className="bg-background">
      {data && (
        <>
          {/* Top / CRM Offerings */}
          {data?.top?.topList?.length > 0 && (
            <CrmOfferingsSection offerings={data.top} />
          )}

          {/* Middle / Outcomes */}
          {data?.mid && Object.keys(data.mid).length > 0 && (
            <OutcomesSection outcomes={data.mid} />
          )}

          {/* Bottom / Closing */}
          {data?.bottom && Object.keys(data.bottom).length > 0 && (
            <ClosingSection data={data.bottom} />
          )}
        </>
      )}
    </main>
  );
}
