"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Search, MapPin, Calendar, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar - Exact match to courtsite.my */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-600">CourtSite</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/venues" className="text-gray-700 hover:text-blue-600 font-medium">
              Find a Court
            </Link>
            <Link href="/list-venue" className="text-gray-700 hover:text-blue-600 font-medium">
              List Your Court
            </Link>
            <Button variant="outline" className="font-medium">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 font-medium">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Exact match */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find and Book Sports Courts Near You
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover and instantly book badminton courts, tennis courts, and more across Malaysia
            </p>
            
            {/* Search Bar - Exact match */}
            <Card className="p-2 flex items-center gap-2 shadow-lg">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search by location or venue name" 
                  className="pl-10 h-12 border-0 focus-visible:ring-0"
                />
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                Search
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Sports Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Sports</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Badminton', count: '234 venues' },
              { name: 'Tennis', count: '156 venues' },
              { name: 'Basketball', count: '98 venues' },
              { name: 'Futsal', count: '167 venues' }
            ].map((sport) => (
              <Card key={sport.name} className="group cursor-pointer hover:shadow-md transition-shadow">
                <div className="p-6">
                  <img 
                    src={`https://prompt-stack.sshh.io/api/mocks/images?query=${sport.name} court`}
                    alt={sport.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900">{sport.name}</h3>
                      <p className="text-sm text-gray-500">{sport.count}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Venues Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Venues</h2>
            <Link href="/venues" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={`https://prompt-stack.sshh.io/api/mocks/images?orientation=landscape&query=sports venue ${i}`}
                  alt={`Featured Venue ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    Kuala Lumpur
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Premium Sports Center {i}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      Available Today
                    </div>
                    <span className="font-semibold text-blue-600">From RM 50/hour</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About CourtSite</h3>
              <p className="text-gray-400 text-sm">
                The easiest way to find and book sports facilities across Malaysia.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/venues">Find a Court</Link></li>
                <li><Link href="/list-venue">List Your Court</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Popular Locations</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Kuala Lumpur</li>
                <li>Petaling Jaya</li>
                <li>Subang Jaya</li>
                <li>Shah Alam</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Email: support@courtsite.my</li>
                <li>Phone: +60 3-1234 5678</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            © 2024 CourtSite. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}