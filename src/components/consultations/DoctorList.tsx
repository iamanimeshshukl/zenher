
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Star, Clock } from 'lucide-react';

// Mock data - in a real app this would come from an API
const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Gynecologist',
    image: '/placeholder.svg',
    rating: 4.9,
    availableToday: true,
    experience: '15+ years'
  },
  {
    id: 2,
    name: 'Dr. Rebecca Chen',
    specialty: 'OB-GYN',
    image: '/placeholder.svg',
    rating: 4.8,
    availableToday: false,
    experience: '8+ years'
  },
  {
    id: 3,
    name: 'Dr. Michael Rivera',
    specialty: 'Reproductive Health',
    image: '/placeholder.svg',
    rating: 4.7,
    availableToday: true,
    experience: '12+ years'
  },
  {
    id: 4,
    name: 'Dr. Amelia Patel',
    specialty: 'Gynecologist',
    image: '/placeholder.svg',
    rating: 4.9,
    availableToday: true,
    experience: '10+ years'
  }
];

const DoctorList = () => {
  return (
    <div className="space-y-4">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
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
    <Card className="overflow-hidden card-hover">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <img 
            src={doctor.image} 
            alt={doctor.name} 
            className="w-20 h-20 object-cover rounded-full"
          />
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{doctor.name}</h3>
                <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                <div className="flex items-center mt-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-sm">{doctor.rating} • {doctor.experience}</span>
                </div>
              </div>
              
              {doctor.availableToday ? (
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  <Clock size={12} className="mr-1" /> Available Today
                </Badge>
              ) : (
                <Badge variant="outline" className="text-muted-foreground">
                  Next Available: Tomorrow
                </Badge>
              )}
            </div>
            
            <div className="flex gap-2 mt-3">
              <Button className="flex-1 bg-empowerteal hover:bg-empowerteal-dark">
                <Calendar size={15} className="mr-1" /> Schedule
              </Button>
              <Button variant="outline" className="flex-1 border-empowerteal text-empowerteal-dark hover:bg-empowerteal/10">
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
