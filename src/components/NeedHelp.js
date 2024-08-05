function NeedHelp() {
  return (
    <div className="text-xs max-w-60 bg-[#74d44c] py-2 rounded-sm">
      <p className="px-3 mb-2 text-white font-medium">Need Help?</p>
      <div className="bg-white px-3 py-1 flex flex-col gap-1">
        <p className="max-w-[90%]">
          -24/7 Phone Assistance Please call{" "}
          <a href="" className="text-[#0c77b9] hover:underline">
            Phone Banking
          </a>{" "}
          or{" "}
          <a href="" className="text-[#0c77b9] hover:underline">
            email us
          </a>
        </p>
        <p>-
          <a href="" className="text-[#0c77b9] hover:underline">
            Frequently Asked Questions
          </a>
        </p>
        <p>-
          <a href="" className="text-[#0c77b9] hover:underline">
            Website Maintenance Schedule
          </a>
        </p>
      </div>
    </div>
  );
}

export default NeedHelp;
