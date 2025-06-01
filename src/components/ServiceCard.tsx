
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Star } from 'lucide-react';

const ServiceCard = ({ service, onBook }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Traditional':
        return 'bg-amber-100 text-amber-800';
      case 'Therapeutic':
        return 'bg-blue-100 text-blue-800';
      case 'Relaxation':
        return 'bg-emerald-100 text-emerald-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <div className="text-4xl mb-2">{service.image}</div>
          <Badge className={getCategoryColor(service.category)}>
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{service.duration}</span>
            </div>
            <div className="text-xl font-bold text-emerald-600">
              {service.price}
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800">Manfaat:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <Button 
            onClick={() => onBook(service)}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
          >
            Pesan Layanan
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
