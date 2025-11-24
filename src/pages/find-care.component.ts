
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-find-care',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-white min-h-screen">
      <!-- Search Header -->
      <div class="bg-primary-700 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-6">Find the right care for you</h1>
          <div class="max-w-2xl mx-auto bg-white rounded-2xl p-2 flex flex-col md:flex-row gap-2 shadow-lg">
            <div class="flex-grow flex items-center px-4 bg-slate-50 rounded-xl">
              <svg class="text-slate-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Condition, procedure, or doctor name" class="w-full bg-transparent border-none p-3 focus:ring-0 text-slate-700 placeholder-slate-400 outline-none">
            </div>
            <div class="md:w-48 flex items-center px-4 bg-slate-50 rounded-xl">
              <svg class="text-slate-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input type="text" placeholder="City or Zip" class="w-full bg-transparent border-none p-3 focus:ring-0 text-slate-700 placeholder-slate-400 outline-none">
            </div>
            <button class="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-medium transition-colors">Search</button>
          </div>
        </div>
      </div>

      <!-- Filters & Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col md:flex-row gap-8">
          
          <!-- Filters Sidebar (Hidden on mobile for simplicity) -->
          <div class="hidden md:block w-64 space-y-8">
            <div>
              <h3 class="font-bold text-slate-900 mb-4">Specialty</h3>
              <div class="space-y-2">
                <label class="flex items-center gap-2 text-slate-600 cursor-pointer hover:text-primary-600">
                  <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500"> Primary Care
                </label>
                <label class="flex items-center gap-2 text-slate-600 cursor-pointer hover:text-primary-600">
                  <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500"> Cardiology
                </label>
                <label class="flex items-center gap-2 text-slate-600 cursor-pointer hover:text-primary-600">
                  <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500"> Dermatology
                </label>
                <label class="flex items-center gap-2 text-slate-600 cursor-pointer hover:text-primary-600">
                  <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500"> Psychology
                </label>
              </div>
            </div>
             <div>
              <h3 class="font-bold text-slate-900 mb-4">Availability</h3>
              <div class="space-y-2">
                <label class="flex items-center gap-2 text-slate-600 cursor-pointer hover:text-primary-600">
                  <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500"> Available Today
                </label>
                <label class="flex items-center gap-2 text-slate-600 cursor-pointer hover:text-primary-600">
                  <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500"> Available Next 3 Days
                </label>
              </div>
            </div>
          </div>

          <!-- Results Grid -->
          <div class="flex-1">
            <h2 class="text-xl font-bold text-slate-900 mb-6">Top Recommended Doctors</h2>
            
            <div class="grid grid-cols-1 gap-6">
              @for (doc of doctors(); track doc.name) {
                <div class="flex flex-col sm:flex-row bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow gap-6">
                  <div class="flex-shrink-0">
                    <img [ngSrc]="doc.image" width="120" height="120" class="rounded-xl object-cover w-full sm:w-[120px] h-[120px]" alt="Doctor">
                  </div>
                  <div class="flex-grow">
                    <div class="flex justify-between items-start">
                      <div>
                        <h3 class="text-lg font-bold text-slate-900">{{ doc.name }}</h3>
                        <p class="text-primary-600 font-medium text-sm">{{ doc.specialty }}</p>
                      </div>
                      <div class="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
                         <svg class="text-yellow-400 w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                         <span class="text-sm font-bold text-slate-700">{{ doc.rating }}</span>
                      </div>
                    </div>
                    <p class="text-slate-500 text-sm mt-2 line-clamp-2">{{ doc.bio }}</p>
                    
                    <div class="mt-4 flex flex-wrap gap-3 text-xs">
                      <span class="px-2 py-1 bg-slate-100 rounded text-slate-600 flex items-center gap-1">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {{ doc.location }}
                      </span>
                      <span class="px-2 py-1 bg-slate-100 rounded text-slate-600 flex items-center gap-1">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Next Available: {{ doc.availability }}
                      </span>
                    </div>

                    <div class="mt-4 flex gap-3">
                      <button class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Book Appointment</button>
                      <button class="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">View Profile</button>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  `
})
export class FindCareComponent {
  doctors = signal([
    {
      name: "Dr. Olivia Sterling",
      specialty: "Cardiologist",
      image: "https://picsum.photos/200/200?random=20",
      rating: 4.9,
      bio: "Specializing in preventative cardiology and heart health with over 15 years of experience.",
      location: "New York, NY",
      availability: "Tomorrow at 10:00 AM"
    },
    {
      name: "Dr. Marcus Chen",
      specialty: "Dermatologist",
      image: "https://picsum.photos/200/200?random=21",
      rating: 4.8,
      bio: "Expert in clinical and cosmetic dermatology. Dedicated to helping patients achieve healthy skin.",
      location: "Brooklyn, NY",
      availability: "Today at 2:30 PM"
    },
    {
      name: "Dr. Sarah Johnson",
      specialty: "Pediatrician",
      image: "https://picsum.photos/200/200?random=22",
      rating: 5.0,
      bio: "Compassionate care for children from newborns to adolescents.",
      location: "Queens, NY",
      availability: "Friday at 9:15 AM"
    },
    {
      name: "Dr. Emily Davis",
      specialty: "Psychiatrist",
      image: "https://picsum.photos/200/200?random=23",
      rating: 4.7,
      bio: "Holistic approach to mental health, focusing on both medication management and therapy.",
      location: "Manhattan, NY",
      availability: "Available Now"
    }
  ]);
}
