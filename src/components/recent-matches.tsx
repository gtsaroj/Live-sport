"use client";

import { useState } from "react";
import { Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

// Mock data for demonstration
const mockMatches = [
  {
    id: "1",
    title: "Manchester United vs Liverpool",
    status: "live" as const,
    venue: "Old Trafford",
    matchTime: "2023-05-02T15:00:00",
    isViewed: true,
  },
  {
    id: "2",
    title: "Arsenal vs Chelsea",
    status: "upcoming" as const,
    venue: "Emirates Stadium",
    matchTime: "2023-05-05T17:30:00",
    isViewed: false,
  },
  {
    id: "3",
    title: "Barcelona vs Real Madrid",
    status: "highlight" as const,
    venue: "Camp Nou",
    matchTime: "2023-04-30T20:00:00",
    isViewed: true,
  },
  {
    id: "4",
    title: "India vs Pakistan",
    status: "upcoming" as const,
    venue: "Melbourne Cricket Ground",
    matchTime: "2023-05-10T09:00:00",
    isViewed: false,
  },
  {
    id: "5",
    title: "LA Lakers vs Golden State Warriors",
    status: "live" as const,
    venue: "Staples Center",
    matchTime: "2023-05-02T19:00:00",
    isViewed: true,
  },
];

interface RecentMatchesProps {
  sportType?: string;
}

export function RecentMatches({ sportType }: RecentMatchesProps) {
  const [matches, setMatches] = useState(mockMatches);
  console.log(sportType);
  const handleDelete = (id: string) => {
    setMatches(matches.filter((match) => match.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-red-500";
      case "upcoming":
        return "bg-blue-500";
      case "highlight":
        return "bg-amber-500";
      default:
        return "bg-gray-500";
    }
  };

  const router = useRouter();

  function routeToEdit(id: string, status: string) {
    if (status === "upcoming") {
      router.push(`/dashboard/upcoming-matches/edit/${id}`);
    } else if (status === "live") {
      router.push(`/dashboard/live-matches/edit/${id}`);
    } else if (status === "highlight") {
      router.push(`/dashboard/highlight-matches/edit/${id}`);
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Match</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Venue</TableHead>
            <TableHead>Match Time</TableHead>
            <TableHead>Viewed</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {matches.length > 0 ? (
            matches.map((match) => (
              <TableRow key={match.id}>
                <TableCell className="font-medium">{match.title}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="flex w-fit items-center gap-1 capitalize"
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${getStatusColor(
                        match.status
                      )}`}
                    />
                    {match.status}
                  </Badge>
                </TableCell>
                <TableCell>{match.venue}</TableCell>
                <TableCell>
                  {new Date(match.matchTime).toLocaleString()}
                </TableCell>
                <TableCell>
                  {match.isViewed ? (
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-600"
                    >
                      Yes
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-red-50 text-red-600">
                      No
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        className="flex items-center gap-2"
                        onClick={() => console.log("View", match.id)}
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex items-center gap-2"
                        onClick={() => routeToEdit(match.id, match.status)}
                      >
                        <Pencil className="h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex items-center gap-2 text-red-600"
                        onClick={() => handleDelete(match.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No matches found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
