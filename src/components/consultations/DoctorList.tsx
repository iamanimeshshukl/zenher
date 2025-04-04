import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Star, Clock } from 'lucide-react';

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
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
    rating: 4.9,
    availableToday: true,
    experience: '10+ years',
  },
];

const DoctorList = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
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
    <Card className="rounded-xl transition-all hover:shadow-md border border-muted">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <img
            src={doctor.image}
            alt={`Dr. ${doctor.name}`}
            className="w-16 h-16 rounded-full object-cover border shadow-sm"
          />

          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{doctor.name}</h3>
                <div className="text-sm text-muted-foreground">{doctor.specialty}</div>
                <div className="flex items-center text-yellow-500 text-sm">
                  <Star size={16} className="fill-yellow-400 mr-1" />
                  {doctor.rating} <span className="text-muted-foreground ml-1">• {doctor.experience}</span>
                </div>
              </div>

              <div className="ml-2">
                {doctor.availableToday ? (
                  <Badge className="bg-green-100 text-green-700">
                    <Clock size={12} className="mr-1" /> Today
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-muted-foreground text-xs">
                    Tomorrow
                  </Badge>
                )}
              </div>
            </div>

            {/* Category tags (optional specialties/treatments etc) */}
            <div className="flex flex-wrap gap-1 mt-3 overflow-x-auto max-w-full">
              <Badge variant="outline" className="text-xs px-2">Fertility</Badge>
              <Badge variant="outline" className="text-xs px-2">PCOS</Badge>
              <Badge variant="outline" className="text-xs px-2">Pregnancy</Badge>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <Button className="text-sm bg-purple-600 hover:bg-purple-400">
                <Calendar size={15} className="mr-1" /> Book
              </Button>
              <Button
                variant="outline"
                className="text-sm border-purple-600 text-purple-600 "
              >
                <MessageCircle size={15} className="mr-1" /> Message
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorList;
