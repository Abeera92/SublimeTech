import { Phone, Mail, Clock } from "lucide-react";

export default function ContactDetails() {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold text-black text-center">Book an Appointment</h2>
        <div className="mt-3 w-20 h-1 text-center bg-teal-500"></div>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 space-y-6">

        <div className="flex items-center gap-4">
          <Phone className="w-8 h-8 text-teal-500" />
          <div>
            <p className="font-semibold">(+123) 456 7890</p>
            <p className="text-sm text-gray-400">Call us anytime</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="w-8 h-8 text-teal-500" />
          <div>
            <p className="font-semibold">info@sublimetech.com</p>
            <p className="text-sm text-gray-400">Email us</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Clock className="w-8 h-8 text-teal-500" />
          <div>
            <p className="font-semibold">Mon – Fri: 10am – 7:00pm</p>
            <p className="text-sm text-gray-400">Working hours</p>
          </div>
        </div>

      </div>

    </div>
  );
}
