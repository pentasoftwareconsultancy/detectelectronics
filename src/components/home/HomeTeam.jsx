import React from "react";

const teamMembers = [
  {
    name: "Ajinkya Sasne",
    role: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&h=800&fit=crop",
  },
  {
    name: "Sneha Patil",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop",
  },
  {
    name: "Rohit Sharma",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop",
  },
  {
    name: "Neha Joshi",
    role: "Frontend Engineer",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=800&fit=crop",
  },
];

const HomeTeam = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-14 text-[#2384c5]">
          Meet Our Team
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500 mt-2 text-lg">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTeam;
