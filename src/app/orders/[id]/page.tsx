import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  ArrowLeft,
  Package,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
  XCircle,
  MapPin,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  CreditCard,
  Printer,
  Share,
  Edit
} from "lucide-react";
import Link from "next/link";

const OrderDetailPage = ({ params }: { params: { id: string } }) => {
  // Mock order data - in real app this would come from API
  const order = {
    id: params.id,
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    items: [
      {
        id: 1,
        name: "Premium Widget Pro",
        price: 299.99,
        quantity: 1,
        image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: 2,
        name: "Widget Accessory Pack",
        price: 49.99,
        quantity: 2,
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ],
    status: "shipped",
    orderDate: "2024-03-15",
    shipDate: "2024-03-16",
    estimatedDelivery: "2024-03-20",
    shippingAddress: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA"
    },
    billingAddress: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA"
    },
    paymentMethod: "Credit Card",
    subtotal: 399.97,
    shipping: 12.99,
    tax: 32.00,
    total: 444.96,
    trackingNumber: "1Z999AA1234567890",
    notes: "Please deliver to front door. Ring doorbell when delivering."
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'shipped':
        return 'bg-blue-500';
      case 'processing':
        return 'bg-yellow-500';
      case 'pending':
        return 'bg-orange-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'shipped':
        return <Truck className="h-4 w-4" />;
      case 'processing':
        return <Package className="h-4 w-4" />;
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const timeline = [
    {
      date: "2024-03-15 10:30 AM",
      status: "Order Placed",
      description: "Order #ORD-001 has been placed successfully",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />
    },
    {
      date: "2024-03-15 2:15 PM",
      status: "Payment Confirmed",
      description: "Payment of $444.96 has been processed",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />
    },
    {
      date: "2024-03-16 9:45 AM",
      status: "Order Processed",
      description: "Order has been processed and is ready for shipping",
      icon: <Package className="h-4 w-4 text-blue-500" />
    },
    {
      date: "2024-03-16 3:20 PM",
      status: "Shipped",
      description: "Order has been shipped via FedEx Ground",
      icon: <Truck className="h-4 w-4 text-blue-500" />
    }
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 animate-fade-in">
        <div className="flex items-center gap-4">
          <Link href="/orders">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Orders
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight">Order {order.id}</h1>
            <p className="text-muted-foreground">Order details and tracking information</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit Order
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Status */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge 
                  variant="secondary" 
                  className={`text-sm ${getStatusColor(order.status)}`}
                >
                  {getStatusIcon(order.status)}
                  <span className="ml-1 capitalize">{order.status}</span>
                </Badge>
                <span className="text-muted-foreground">• Order Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Order Date</div>
                    <div className="font-medium">{new Date(order.orderDate).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Ship Date</div>
                    <div className="font-medium">{new Date(order.shipDate).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Est. Delivery</div>
                    <div className="font-medium">{new Date(order.estimatedDelivery).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Tracking</div>
                    <div className="font-medium">{order.trackingNumber}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 rounded-lg border border-border/50">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">Qty: {item.quantity}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${item.price.toFixed(2)}</div>
                      <div className="text-sm text-muted-foreground">${(item.price * item.quantity).toFixed(2)} total</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Order Timeline */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Order Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timeline.map((event, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{event.status}</div>
                      <div className="text-sm text-muted-foreground">{event.description}</div>
                      <div className="text-xs text-muted-foreground mt-1">{event.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Info */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={order.customer.avatar} />
                  <AvatarFallback>{order.customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{order.customer.name}</div>
                  <div className="text-sm text-muted-foreground">{order.customer.email}</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  {order.customer.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  {order.customer.email}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Address */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                    <div>{order.shippingAddress.street}</div>
                    <div>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</div>
                    <div>{order.shippingAddress.country}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span>{order.paymentMethod}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${order.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${order.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-medium border-t pt-2">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Notes */}
          {order.notes && (
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Order Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  {order.notes}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage; 