
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20 lg:py-32 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wide mb-6">
              <span class="w-2 h-2 rounded-full bg-primary-500"></span>
              Reimagining Healthcare
            </div>
            <h1 class="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Your Health, <br/>
              <span class="text-primary-600">Our Community</span>
            </h1>
            <p class="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Connect with top-rated doctors, join supportive communities, and access AI-powered health insights all in one place.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a routerLink="/find-care" class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium text-lg shadow-lg shadow-primary-200 hover:shadow-primary-300 transition-all transform hover:-translate-y-1">
                Find a Doctor
              </a>
              <a routerLink="/community" class="px-8 py-4 bg-white border border-slate-200 hover:border-primary-300 text-slate-700 hover:text-primary-700 rounded-full font-medium text-lg shadow-sm hover:shadow-md transition-all">
                Join Community
              </a>
            </div>
            
            <div class="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
              <div class="flex -space-x-2">
                <img src="https://picsum.photos/32/32?random=1" class="w-8 h-8 rounded-full border-2 border-white" alt="User">
                <img src="https://picsum.photos/32/32?random=2" class="w-8 h-8 rounded-full border-2 border-white" alt="User">
                <img src="https://picsum.photos/32/32?random=3" class="w-8 h-8 rounded-full border-2 border-white" alt="User">
                <div class="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+2k</div>
              </div>
              <p>Joined by 2,000+ members today</p>
            </div>
          </div>
          
          <div class="relative hidden lg:block">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-200/40 to-blue-200/40 rounded-full blur-3xl transform scale-90 translate-x-10 translate-y-10"></div>
            <img ngSrc="https://picsum.photos/600/600?random=10" width="600" height="600" priority class="relative rounded-3xl shadow-2xl shadow-slate-200 object-cover aspect-square" alt="Doctor interacting with patient">
            
            <!-- Floating Card 1 -->
            <div class="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce" style="animation-duration: 3s;">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M234.33,69.52l-12.05-7a16,16,0,0,0-20.83,4.56L186.24,89.66,163.64,50.51a16,16,0,0,0-27.71,0l-56,97L51.15,96.26A16,16,0,0,0,26.67,92.7l-12,8a8,8,0,1,0,8.89,13.32L33,107.68l35,60.6a16,16,0,0,0,27.71,0l56-97,14.79,25.62A16,16,0,0,0,180.36,104l28.21-41.35,4.65,2.69a8,8,0,1,0,8-13.86Z"></path></svg>
                </div>
                <div>
                  <p class="font-bold text-slate-800">Recovery Rate</p>
                  <p class="text-xs text-green-600 font-semibold">+12% this month</p>
                </div>
              </div>
            </div>

             <!-- Floating Card 2 -->
             <div class="absolute bottom-20 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"></path></svg>
                </div>
                <div>
                  <p class="font-bold text-slate-800">Top Specialists</p>
                  <p class="text-xs text-slate-500">Verified Doctors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-slate-900 mb-4">Comprehensive Healthcare</h2>
          <p class="text-slate-500 max-w-2xl mx-auto">Everything you need to manage your health journey, from finding the right specialist to daily wellness tracking.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100 group cursor-pointer">
            <div class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M224,112a72,72,0,0,1-72,72H88a72,72,0,1,1,0-144h64A72.08,72.08,0,0,1,224,112Zm-72,56a56,56,0,1,0-56-56A56.06,56.06,0,0,0,152,168Zm-24-42a8,8,0,0,0-8-8H106.71l11.51-16.45a8,8,0,1,0-13.1-9.17l-20.65,29.5a8,8,0,0,0,1.73,10.92l24,20a8,8,0,1,0,10.25-12.29L113.83,134H120A8,8,0,0,0,128,126Z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Find Specialists</h3>
            <p class="text-slate-500 leading-relaxed">Search through thousands of verified doctors and specialists near you. Read reviews and book instantly.</p>
          </div>

           <!-- Card 2 -->
           <div class="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100 group cursor-pointer">
            <div class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M88,112a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm8,40h80a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM232,64V184a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64Zm-16,0a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8Z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Community Support</h3>
            <p class="text-slate-500 leading-relaxed">Join a community of people sharing similar health journeys. Share experiences, ask questions, and get support.</p>
          </div>

           <!-- Card 3 -->
           <div class="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100 group cursor-pointer">
            <div class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M216,136a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,136Zm-8,24H168a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm32-80V192a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V80A16,16,0,0,1,32,64H64V48a8,8,0,0,1,16,0V64h96V48a8,8,0,0,1,16,0V64h32A16,16,0,0,1,240,80ZM32,80V192H224V80Z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">AI Health Assistant</h3>
            <p class="text-slate-500 leading-relaxed">Get instant answers to your health questions, symptom checks, and wellness tips from our advanced AI.</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}
