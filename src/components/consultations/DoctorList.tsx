import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const doctors = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialty: 'Gynecologist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
    rating: 4.9,
    availableToday: true,
    experience: '15+ years',
  },
  {
    id: 2,
    name: 'Dr. Anjali Gupta',
    specialty: 'OB-GYN',
    image: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
    rating: 4.8,
    availableToday: false,
    experience: '8+ years',
  },
  {
    id: 3,
    name: 'Dr. Vikram Singh',
    specialty: 'Reproductive Health',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
    rating: 4.7,
    availableToday: true,
    experience: '12+ years',
  },
  {
    id: 4,
    name: 'Dr. Neha Patel',
    specialty: 'Gynecologist',
   Kathimage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
    rating: 4.9,
    availableToday: true,
    experience: '10+ years',
  },
];

const DoctorList = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-sans font-semibold text-gray-900 text-center mb-10 tracking-tight">
          Meet Our Experts
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
            >
              <DoctorCard doctor={doctor} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

type DoctorCardProps = {
  doctor: {
    id: number;
    name: string;
    specialty: string;
    image: string;
    rating: number;
    availableToday: boolean;
    experience: string;
  };
};

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <Card className="rounded-2xl border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex justify-center mb-4">
          <img
            src={doctor.image}
            alt={`Dr. ${doctor.name}`}
            className="w-20 h-20 rounded-full object-cover border-2 border-indigo-100 shadow-sm group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{doctor.name}</h3>
          <p className="text-sm text-gray-600 mb-3">{doctor.specialty}</p>
          <div className="flex justify-center items-center text-sm text-gray-700 mb-4">
            <Star size={16} className="fill-yellow-400 text-yellow-400 mr-1" />
            <span>{doctor.rating}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span>{doctor.experience}</span>
          </div>

          {doctor.availableToday ? (
            <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1 mb-4">
              <Clock size={12} className="mr-1" /> Available Today
            </Badge>
          ) : (
            <Badge variant="outline" className="text-gray-500 text-xs px-2 py-1 mb-4">
              Next Available: Tomorrow
            </Badge>
          )}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3">
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 rounded-full shadow-md transition-all duration-300"
          >
            <Calendar size={14} className="mr-1" /> Book Now
          </Button>
          <Button
            variant="outline"
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-sm py-2 rounded-full transition-all duration-300"
          >
            <MessageCircle size={14} className="mr-1" /> Chat
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorList;