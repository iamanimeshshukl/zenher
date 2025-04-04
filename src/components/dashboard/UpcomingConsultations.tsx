
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const UpcomingConsultations = () => {
  // Mock data - in a real app this would come from user's data
  const hasAppointment = true;
  const appointment = {
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Gynecologist',
    date: 'May 10, 2025',
    time: '3:00 PM',
    avatar: 'SJ'
  };
  
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-display font-medium mb-4">Your Consultations</h3>
        
        {hasAppointment ? (
          <div className="bg-empowerteal/10 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Avatar>
                <AvatarFallback className="bg-empowerteal-light text-empowerteal-dark">
                  {appointment.avatar}
                </AvatarFallback>
              </Avatar>
              
              <div>
                <h4 className="font-medium">{appointment.doctor}</h4>
                <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 mb-4">
              <div className="flex items-center text-sm">
                <Calendar size={14} className="mr-2 text-empowerteal" />
                <span>{appointment.date}</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock size={14} className="mr-2 text-empowerteal" />
                <span>{appointment.time}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button className="flex-1 bg-empowerteal hover:bg-empowerteal-dark">
                <Video size={15} className="mr-1" /> Join Call
              </Button>
              <Button variant="outline" className="flex-1">Reschedule</Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-4">No upcoming consultations</p>
            <Button className="bg-empowerteal hover:bg-empowerteal-dark">
              Book Consultation
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UpcomingConsultations;
