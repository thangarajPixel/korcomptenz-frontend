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
          <CrmOfferingsSection offerings={data?.top} />
          <OutcomesSection outcomes={data.mid} />

          <ClosingSection data={data.bottom} />
        </>
      )}
    </main>
  );
}
