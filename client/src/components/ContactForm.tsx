import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const mutation = useSubmitContact();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
      <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
        Send us a message
      </h3>
      <p className="text-sm text-slate-500 mb-6">
        Your enquiry will be sent to{" "}
        <a href="mailto:info@topgunaviation.co.za" className="text-primary hover:underline">info@topgunaviation.co.za</a>
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-600">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    {...field} 
                    className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/10"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="john@company.com" 
                      type="email" 
                      {...field} 
                      className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+27 78 000 0000" 
                      type="tel" 
                      {...field} 
                      className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-600">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us how we can assist you with your aviation needs..."
                    className="min-h-[120px] resize-none bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 transition-all"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
