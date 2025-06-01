
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award } from 'lucide-react';

const TherapistCard = ({ therapist }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90">
      <CardHeader className="text-center pb-4">
        <div className="relative mx-auto mb-4">
          <div className="text-6xl">{therapist.image}</div>
          {therapist.certified && (
            <Award className="absolute -top-2 -right-2 w-6 h-6 text-emerald-500 bg-white rounded-full p-1" />
          )}
        </div>
        <h3 className="text-xl font-bold group-hover:text-emerald-600 transition-colors">
          {therapist.name}
        </h3>
        <p className="text-gray-600">Pengalaman {therapist.experience}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-semibold ml-1">{therapist.rating}</span>
          </div>
          <span className="text-sm text-gray-600">({therapist.reviews} review)</span>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Spesialisasi:</h4>
          <div className="flex flex-wrap gap-2">
            {therapist.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        {therapist.certified && (
          <div className="flex items-center text-emerald-600 text-sm">
            <Award className="w-4 h-4 mr-1" />
            Terapis Bersertifikat
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TherapistCard;
