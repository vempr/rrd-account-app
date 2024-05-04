interface LabelAttProps {
  label: string;
  attribute: string | number;
}

export default function AccountLabelAtt({ label, attribute }: LabelAttProps) {
  return (
    <div className="flex w-[90vw] flex-row justify-between md:w-[50vw]">
      <p className="font-bold">{label}</p>
      <p className="text-right">{String(attribute)}</p>
    </div>
  );
}
