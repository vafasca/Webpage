import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarBackgroundService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  addStars(containerClass: string, amount: number) {
    const container = this.renderer.selectRootElement(containerClass, true);
    for (let i = 0; i < amount; i++) {
      const star = this.createStar();
      this.renderer.appendChild(container, star);
    }
  }

  removeStars(containerClass: string) {
    const container = this.renderer.selectRootElement(containerClass, true);
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  private createStar(): HTMLElement {
    const star = this.renderer.createElement('div');
    this.renderer.addClass(star, 'star');
    this.renderer.setStyle(star, 'top', this.generateRandomPercent());
    this.renderer.setStyle(star, 'left', this.generateRandomPercent());
    this.renderer.setStyle(star, 'animationDelay', this.generateRandomDelay());
    return star;
  }

  private generateRandomPercent(min = 0, max = 100): string {
    return `${Math.floor(Math.random() * (max - min + 1) + min)}%`;
  }

  private generateRandomDelay(interval = 3): string {
    return `${Math.random() * interval}s`;
  }
}
