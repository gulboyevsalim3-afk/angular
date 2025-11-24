
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { GeminiService } from '../services/gemini.service';
import { FormsModule } from '@angular/forms';

interface Post {
  id: number;
  author: string;
  avatar: string;
  time: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  tags: string[];
  summary?: string;
}

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-slate-50 min-h-screen pb-12">
      <!-- Page Header -->
      <div class="bg-white border-b border-slate-200 pt-8 pb-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-slate-900">Community Feed</h1>
          <p class="text-slate-500 mt-2">Share your journey, ask questions, and support others.</p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Left Feed -->
          <div class="lg:col-span-2 space-y-6">
            
            <!-- Create Post -->
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div class="flex gap-4">
                 <img src="https://picsum.photos/40/40?random=99" class="w-10 h-10 rounded-full object-cover" alt="Me">
                 <div class="flex-grow">
                   <input type="text" placeholder="Share your thoughts or ask a question..." class="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-slate-700 focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all outline-none">
                   <div class="flex justify-end mt-3 gap-2">
                     <button class="text-slate-500 hover:text-primary-600 p-2 rounded-full hover:bg-primary-50 transition-colors">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-4,160H44V56H212ZM80,120a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,120Z"></path></svg>
                     </button>
                     <button class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium text-sm">Post</button>
                   </div>
                 </div>
              </div>
            </div>

            <!-- Posts List -->
            @for (post of posts(); track post.id) {
              <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div class="flex justify-between items-start mb-4">
                  <div class="flex items-center gap-3">
                    <img [ngSrc]="post.avatar" width="40" height="40" class="rounded-full object-cover" alt="Author">
                    <div>
                      <h4 class="font-bold text-slate-900 text-sm">{{ post.author }}</h4>
                      <p class="text-xs text-slate-400">{{ post.time }}</p>
                    </div>
                  </div>
                  <button class="text-slate-400 hover:text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path></svg>
                  </button>
                </div>
                
                <h3 class="text-lg font-bold text-slate-800 mb-2">{{ post.title }}</h3>
                <p class="text-slate-600 leading-relaxed mb-4">{{ post.content }}</p>
                
                @if (post.summary) {
                  <div class="bg-blue-50 p-3 rounded-lg mb-4 border border-blue-100">
                    <div class="flex items-center gap-2 mb-1">
                      <svg class="text-blue-600 w-4 h-4" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"></path></svg>
                      <span class="text-xs font-bold text-blue-700 uppercase">AI Summary</span>
                    </div>
                    <p class="text-sm text-blue-800">{{ post.summary }}</p>
                  </div>
                } @else {
                   <button (click)="summarize(post)" class="text-xs text-primary-600 font-medium hover:underline mb-4 flex items-center gap-1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M216,136a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,136Zm-8,24H168a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm32-80V192a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V80A16,16,0,0,1,32,64H64V48a8,8,0,0,1,16,0V64h96V48a8,8,0,0,1,16,0V64h32A16,16,0,0,1,240,80ZM32,80V192H224V80Z"></path></svg>
                     Get AI Summary
                   </button>
                }

                <div class="flex gap-2 mb-4">
                  @for (tag of post.tags; track tag) {
                    <span class="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">#{{ tag }}</span>
                  }
                </div>

                <div class="flex items-center justify-between pt-4 border-t border-slate-100">
                   <div class="flex gap-6">
                     <button class="flex items-center gap-2 text-slate-500 hover:text-primary-600 text-sm">
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path></svg>
                       {{ post.likes }}
                     </button>
                     <button class="flex items-center gap-2 text-slate-500 hover:text-primary-600 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,0,0,24,128c0,47.06,30.86,88.1,75.45,100.15a8,8,0,0,0,10.1-9.85c-6-22.56,2.8-42.89,12.52-55.42-35.92-5.49-64.22-22.16-64.22-66.88a51.71,51.71,0,0,1,14.63-36.25,50.31,50.31,0,0,1,1.25-36.12s11.63-3.69,37.85,14.28a127.51,127.51,0,0,1,68.84,0c26.22-18,37.85-14.28,37.85-14.28a50.31,50.31,0,0,1,1.25,36.12A51.71,51.71,0,0,1,206.15,96c0,44.85-28.43,61.39-64.47,66.81,8.2,8.7,11.22,21.65,8.15,37a8,8,0,0,0,15.45,3.12C171.92,189.58,232,166.79,232,128A104.11,104.11,0,0,0,128,24Z"></path></svg>
                       {{ post.comments }} comments
                     </button>
                   </div>
                </div>
              </div>
            }
          </div>

          <!-- Right Sidebar -->
          <div class="lg:col-span-1 space-y-6">
            
            <!-- Topics Card -->
             <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
               <h3 class="font-bold text-slate-900 mb-4">Trending Topics</h3>
               <div class="flex flex-wrap gap-2">
                 <span class="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold cursor-pointer hover:bg-teal-100">#MentalHealth</span>
                 <span class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold cursor-pointer hover:bg-blue-100">#Nutrition</span>
                 <span class="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold cursor-pointer hover:bg-purple-100">#Sleep</span>
                 <span class="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-xs font-semibold cursor-pointer hover:bg-orange-100">#Fitness</span>
                 <span class="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold cursor-pointer hover:bg-slate-200">#DailyVlog</span>
               </div>
             </div>

             <!-- Suggested People -->
             <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
               <h3 class="font-bold text-slate-900 mb-4">Connect with Experts</h3>
               <div class="space-y-4">
                 <div class="flex items-center gap-3">
                   <img src="https://picsum.photos/40/40?random=50" class="rounded-full" alt="Doc">
                   <div class="flex-1">
                     <h4 class="text-sm font-bold text-slate-900">Dr. Sarah Smith</h4>
                     <p class="text-xs text-slate-500">Cardiologist</p>
                   </div>
                   <button class="text-primary-600 hover:bg-primary-50 p-1.5 rounded-full">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                   </button>
                 </div>
                 <div class="flex items-center gap-3">
                   <img src="https://picsum.photos/40/40?random=51" class="rounded-full" alt="Doc">
                   <div class="flex-1">
                     <h4 class="text-sm font-bold text-slate-900">Dr. James Chen</h4>
                     <p class="text-xs text-slate-500">Therapist</p>
                   </div>
                   <button class="text-primary-600 hover:bg-primary-50 p-1.5 rounded-full">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                   </button>
                 </div>
               </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  `
})
export class CommunityComponent {
  private gemini = inject(GeminiService);
  posts = signal<Post[]>([
    {
      id: 1,
      author: "Emily Rose",
      avatar: "https://picsum.photos/100/100?random=4",
      time: "2 hours ago",
      title: "Tips for managing daily anxiety without medication?",
      content: "I've been struggling with mild anxiety lately due to work stress. I really want to try natural methods like meditation or breathing exercises before considering medication. Has anyone had success with specific routines?",
      likes: 24,
      comments: 8,
      tags: ["MentalHealth", "Wellness"]
    },
    {
      id: 2,
      author: "Michael Chang",
      avatar: "https://picsum.photos/100/100?random=5",
      time: "5 hours ago",
      title: "Great experience with the new sleep tracking feature",
      content: "Just wanted to share that tracking my sleep schedule has massively improved my energy levels. Consistency really is key! I realized I was going to bed way too late on weekdays.",
      likes: 45,
      comments: 12,
      tags: ["Sleep", "HealthTracking"]
    },
    {
      id: 3,
      author: "Sarah Williams",
      avatar: "https://picsum.photos/100/100?random=6",
      time: "1 day ago",
      title: "Healthy meal prep ideas for busy moms?",
      content: "Looking for quick, nutritious recipes that my kids will actually eat. I feel like I'm rotating the same 3 meals every week. Help!",
      likes: 18,
      comments: 32,
      tags: ["Nutrition", "Family"]
    }
  ]);

  async summarize(post: Post) {
    const summary = await this.gemini.summarizePost(post.content);
    this.posts.update(currentPosts => 
      currentPosts.map(p => p.id === post.id ? { ...p, summary } : p)
    );
  }
}
