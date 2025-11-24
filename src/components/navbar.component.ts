
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50 h-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div class="flex justify-between items-center h-full">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center gap-2">
            <a routerLink="/" class="flex items-center gap-2">
              <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM176,120a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V128H88a8,8,0,0,1,0-16h32V80a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,120Z"></path>
                </svg>
              </div>
              <span class="font-bold text-xl text-slate-900 tracking-tight">Care</span>
            </a>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-8 items-center">
            <a routerLink="/" routerLinkActive="text-primary-600 font-medium" [routerLinkActiveOptions]="{exact: true}" class="text-slate-500 hover:text-primary-600 transition-colors text-sm font-medium">Home</a>
            <a routerLink="/community" routerLinkActive="text-primary-600 font-medium" class="text-slate-500 hover:text-primary-600 transition-colors text-sm font-medium">Community</a>
            <a routerLink="/find-care" routerLinkActive="text-primary-600 font-medium" class="text-slate-500 hover:text-primary-600 transition-colors text-sm font-medium">Find Doctors</a>
            <a routerLink="/assistant" routerLinkActive="text-primary-600 font-medium" class="text-slate-500 hover:text-primary-600 transition-colors text-sm font-medium">AI Assistant</a>
          </div>

          <!-- CTA Button -->
          <div class="hidden md:flex items-center">
            <button class="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md">
              Sign In
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button (click)="toggleMenu()" class="text-slate-500 hover:text-slate-900 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isOpen()) {
        <div class="md:hidden bg-white border-b border-slate-200 absolute w-full">
          <div class="px-4 pt-2 pb-4 space-y-1 flex flex-col">
            <a routerLink="/" (click)="closeMenu()" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Home</a>
            <a routerLink="/community" (click)="closeMenu()" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Community</a>
            <a routerLink="/find-care" (click)="closeMenu()" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Find Doctors</a>
            <a routerLink="/assistant" (click)="closeMenu()" class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">AI Assistant</a>
            <div class="pt-2">
               <button class="w-full bg-primary-600 text-white px-3 py-2 rounded-lg text-center font-medium">Sign In</button>
            </div>
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }
}
