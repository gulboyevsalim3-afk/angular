
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-1">
            <div class="flex items-center gap-2 mb-4">
               <div class="w-6 h-6 bg-primary-500 rounded-md flex items-center justify-center text-white">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM176,120a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V128H88a8,8,0,0,1,0-16h32V80a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,120Z"></path></svg>
               </div>
               <span class="text-white font-bold text-lg">Care</span>
            </div>
            <p class="text-sm text-slate-400 leading-relaxed">
              Connecting you with the best healthcare professionals and a supportive community.
            </p>
          </div>
          
          <div>
            <h3 class="text-white font-semibold mb-4">Platform</h3>
            <ul class="space-y-2 text-sm">
              <li><a routerLink="/" class="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a routerLink="/community" class="hover:text-primary-400 transition-colors">Community</a></li>
              <li><a routerLink="/find-care" class="hover:text-primary-400 transition-colors">Find Doctors</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-semibold mb-4">Resources</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-primary-400 transition-colors">Help Center</a></li>
              <li><a href="#" class="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-semibold mb-4">Stay Updated</h3>
            <div class="flex gap-2">
              <input type="email" placeholder="Enter your email" class="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-primary-500 text-white">
              <button class="bg-primary-600 hover:bg-primary-500 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">Join</button>
            </div>
          </div>
        </div>
        <div class="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          &copy; 2024 Care Platform. All rights reserved.
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
