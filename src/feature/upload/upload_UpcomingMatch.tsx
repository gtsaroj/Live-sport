"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Upload } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toaster } from "@/utils/toaster/toaster";

// Create a schema for form validation
const formSchema = z.object({
  match: z.array(
    z.object({
      name: z.string().min(1, { message: "Team name is required." }),
      image: z.string().url({ message: "Invalid image URL." }),
    })
  ),
  matchTime: z.string(),

  venue: z.string().min(3, { message: "Venue must be at least 3 characters." }),
});

export const Upload_UpcomingMatch = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      match: [
        { name: "", image: "" }, // Team A
        { name: "", image: "" }, // Team B
      ],
      venue: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Format data for API
      const uploadData: Model.Upcoming = {
        team: values.match,
        matchTime: values.matchTime,
        venue: values.venue,
      };

      console.log("Submitting data:", uploadData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toaster({
        title: "Success!",
        className: "bg-green-50 ",
        icon: "success",
        message: "Upcoming match has been uploaded successfully.",
      });

      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toaster({
        className: "bg-red-50 ",
        icon: "error",
        title: "Error",
        message: "Failed to upload live match. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Upload Live Match</CardTitle>
        <CardDescription>
          Enter the details for the live match you want to upload.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Team A & Team B Row */}
            <div className="grid w-full  grid-cols-1 md:grid-cols-2 gap-6">
              {/* Team A */}
              <div className="flex  w-full flex-col items-start justify-start gap-3">
                <FormField
                  control={form.control}
                  name="match.0.name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Team A</FormLabel>
                      <FormControl>
                        <Input placeholder="Team A Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="match.0.image"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input placeholder="Team A image" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Team B */}
              <div className="flex w-full flex-col items-start justify-start gap-3">
                <FormField
                  control={form.control}
                  name="match.1.name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Team B</FormLabel>
                      <FormControl>
                        <Input placeholder="Team B Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="match.1.image"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Goal</FormLabel>
                      <FormControl>
                        <Input placeholder="Team B image" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="venue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Venue</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the venue" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex cursor-pointer justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  form.reset();
                }}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Match
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
