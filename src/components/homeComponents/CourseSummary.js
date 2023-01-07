import React from "react";
import SectionTitle from "../shared/SectionTitle";

const CourseSummary = () => {
  const summary = [
    "🔵 কিভাবে প্রফেশনাল ইউটিউব চ্যানেল খুলবেন?",
    "🔵 ইউটিউব চ্যানেলের সকল গুরুত্বপূর্ণ সেটিংস কিভাবে ঠিক করবেন A to Z",
    "🔵 শুধুমাত্র মোবাইল ফোন ইউস করে কিভাবে ইউটিউব এবং ফেসবুক থেকে ইনকাম করা যায়",
    "🔵 ভিন্ন ভিন্ন ক্যাটাগরিতে অসংখ্য ইউটিউব চ্যানেল আইডিয়া (No Face)",
    "🔵 শুধুমাত্র কিছু Software এবং Website ইউস করে কিভাবে ভিডিও তৈরী করবেন যেগুলো থেকে হাই ইনকাম জেনারট করতে পারবেন",
    "🔵 (Example Channels). যারা এই প্রসেসকে কাজে লাগিয়ে লাখ লাখ টাকা ইনকাম করছে",
    "🔵 Amazon Associate Program এ কিভাবে একাউন্ট খুলবেন তার সম্পূর্ন গাইডলাইন।",
    "🔵 Amazon Affiliate Link কোন কোন সোসিয়াল মিডিয়ায় শেয়ার করলে Highest Sell জেনারেট হয়।",
    "🔵 ইউটিউব চ্যানেলের মাধ্যমে কিভাবে অ্যাফিলিয়েট মার্কেটিং করবেন",
    "🔵 অ্যামাজন, আলি-এক্সপ্রেস এর মত টোটাল ১০ টি Affiliate Platform দেখাবো যেখান থেকে আপনারা মাল্টিপল এবং Highest ইনকাম জেনারেট করতে পারবেন",
    "🔵 Affiliate Marketing এবং CPA Marketing সম্পর্কে পরিস্কার ধারনা",
    "🔵 Top 10 CPA Network. যেখানে থেকে Handsome ইনকাম জেনারেট করতে পারবেন",
    "🔵 YouTube Business By Hiring Content Creation Team",
    "🔵 Content Creation Team কোথায় খুজে পাবেন, কিভাবে স্বল্প মূল্যে Hire করবেন, কিভাবে Manage করবেন তার সম্পূর্ণ গাইডলাইন",
    "🔵 ইউটিউব Community Guideline কে বাইপাস করে ইউটিউব চ্যানেল গ্রো করার নিন্জা টেকনিক যা আপনি অন্য কোথাও পাবেন না",
    "🔵 বড় বড় চ্যানেলের মত same to same ডুপ্লিকেট চ্যানেল কিভাবে তৈরি করবেন। কেউ বুঝতেই পারবেনা কোনটি আসল এবং কোনটি আপনি ক্রিয়েট করেছেন। এই ডুপ্লিকেট চ্যানেলের মাধ্যমে আপনি আপনার ইউটিউব চ্যানেলকে প্রমোট করতে পারবেন",
    "🔵 কমেন্ট রিপ্লাই এর মাধ্যমে কিভাবে অন্যান্য ইউটিউব চ্যানেলের সাব্সক্রাইবারদের আপনার নিজের চ্যানেলে নিয়ে আসবেন",
    "🔵 High CPM Niche কিভাবে সিলেক্ট করবেন যেখান থেকে High ইনকাম জেনারেট হয়",
    "🔵 USA, Canada, UK অডিয়েন্স টার্গেট করে কিভাবে ইউটিউব চ্যানেল খুলবেন যেসব চ্যানেলে কম ভিউ হলেও ইনকাম বেশি হবে। অ্যাড রেভিনিও থেকেও ইনকাম হবে, অ্যাফিলিয়েট মার্কেটিং থেকেও ইনকাম হবে",
  ];

  const summaryHalfNumber = Math.round(summary.length / 2);

  const summaryHalf = summary.slice(0, summaryHalfNumber);
  const summaryAnotherHalf = summary.slice(summaryHalfNumber, summary.length);

  return (
    <div className="w-10/12 mx-auto md:p-8">
      <SectionTitle text="Course Summary" className="text-white" />

      <div>
        <p className="my-5">এই কোর্সে যা যা পাবেন</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-start">
            <ul>
              {summaryHalf.map((text, i) => {
                return (
                  <li key={i} className="mb-2 shadow-md shadow-[#322a2a] p-1">
                    <p className="text-sm">{text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-start">
            <ul>
              {summaryAnotherHalf.map((text, i) => {
                return (
                  <li key={i} className="mb-2 shadow-md shadow-[#322a2a] p-1">
                    <p className="text-sm">{text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSummary;
