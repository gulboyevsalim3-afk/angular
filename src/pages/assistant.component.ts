
import { Component, ChangeDetectionStrategy, signal, inject, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../services/gemini.service';

interface Message {
  text: string;
  sender: 'user' | 'ai';
  time: Date;
}

@Component({
  selector: 'app-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-slate-50 h-[calc(100vh-64px)] flex flex-col">
      
      <!-- Header -->
      <div class="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-3 shadow-sm z-10">
        <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,136a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,136Zm-8,24H168a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm32-80V192a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V80A16,16,0,0,1,32,64H64V48a8,8,0,0,1,16,0V64h96V48a8,8,0,0,1,16,0V64h32A16,16,0,0,1,240,80ZM32,80V192H224V80Z"></path></svg>
        </div>
        <div>
          <h1 class="font-bold text-slate-900">Care AI Assistant</h1>
          <p class="text-xs text-slate-500">Ask me anything about health & wellness</p>
        </div>
      </div>

      <!-- Chat Area -->
      <div class="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth" #scrollContainer>
        @for (msg of messages(); track msg.time) {
          <div class="flex w-full" [class.justify-end]="msg.sender === 'user'">
            <div class="max-w-[80%] sm:max-w-[70%] rounded-2xl p-4 shadow-sm text-sm leading-relaxed"
                 [class.bg-primary-600]="msg.sender === 'user'"
                 [class.text-white]="msg.sender === 'user'"
                 [class.bg-white]="msg.sender === 'ai'"
                 [class.text-slate-700]="msg.sender === 'ai'"
                 [class.rounded-tr-none]="msg.sender === 'user'"
                 [class.rounded-tl-none]="msg.sender === 'ai'">
              {{ msg.text }}
              <div class="text-[10px] opacity-70 mt-2 text-right">
                {{ msg.time | date:'shortTime' }}
              </div>
            </div>
          </div>
        }
        
        @if (isLoading()) {
          <div class="flex w-full justify-start">
            <div class="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm">
              <div class="flex space-x-2 items-center">
                <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Input Area -->
      <div class="bg-white p-4 border-t border-slate-200">
        <div class="max-w-4xl mx-auto relative">
          <input 
            type="text" 
            [(ngModel)]="inputMessage" 
            (keyup.enter)="sendMessage()"
            placeholder="Type your health question..." 
            class="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-12 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-slate-700"
            [disabled]="isLoading()">
          
          <button 
            (click)="sendMessage()"
            [disabled]="!inputMessage.trim() || isLoading()"
            class="absolute right-2 top-2 p-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-157.76,48.69a16,16,0,0,0-2.24,29.67l71.42,21.2,21.2,71.42a16,16,0,0,0,29.66-2.24l48.69-157.76A16,16,0,0,0,227.32,28.68ZM71.15,126.57,221.75,199.93,201.09,49.27Z"></path></svg>
          </button>
        </div>
        <div class="text-center mt-2">
          <p class="text-[10px] text-slate-400">AI can make mistakes. Please consult a real doctor for medical advice.</p>
        </div>
      </div>

    </div>
  `
})
export class AssistantComponent implements AfterViewChecked {
  private gemini = inject(GeminiService);
  
  messages = signal<Message[]>([
    { text: "Hello! I'm your Care AI assistant. How can I help you with your wellness journey today?", sender: 'ai', time: new Date() }
  ]);
  
  inputMessage = '';
  isLoading = signal(false);
  
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  async sendMessage() {
    if (!this.inputMessage.trim() || this.isLoading()) return;

    const userMsg = this.inputMessage;
    this.messages.update(msgs => [...msgs, { text: userMsg, sender: 'user', time: new Date() }]);
    this.inputMessage = '';
    this.isLoading.set(true);

    const aiResponse = await this.gemini.getHealthAdvice(userMsg);
    
    this.messages.update(msgs => [...msgs, { text: aiResponse, sender: 'ai', time: new Date() }]);
    this.isLoading.set(false);
  }
}
