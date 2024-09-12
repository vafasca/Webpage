import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-timeline',
  templateUrl: './about-timeline.component.html',
  styleUrls: ['./about-timeline.component.css']
})
export class AboutTimelineComponent implements OnInit {
  @ViewChild('switch1', { static: false }) switch1: ElementRef<HTMLInputElement> | undefined;
  showModal = false;
  modalClass = '';
  currentTitle = '';
  currentContent: string[] = []; // Cambia a array de strings

  timelineData = [
    {
      id: 'one',
      date: '1997 - 2003',
      title: 'Lanzamiento – Proveedor de Tecnología Innovadora',
      content: [
        'Fundada como una empresa de aplicaciones compuestas',
        'Lanzamiento de la primera plataforma comercial de fusión de datos para el sector de inteligencia',
        'Desarrollo de la primera tecnología Smart Client de la industria',
        'Creación de la primera tecnología SOA basada en modelos de la industria'
      ]
    },
    {
      id: 'two',
      date: '2004 - 2008',
      title: 'Enfoque en Servicios Financieros – Soluciones innovadoras para la gestión de riesgos',
      content: [
        'Desarrollo de la primera plataforma de aplicaciones compuestas de clase empresarial de la industria',
        'Lanzamiento de Conozca a su Cliente (KYC): Solución de la industria bancaria para el cumplimiento de ATF/sanciones',
        'Introducción de Know Your Fraud: Primera solución de fraude de canales cruzados de la industria bancaria',
        'Gestión de casos de próxima generación para la gestión de investigaciones'
      ]
    },
    {
      id: 'three',
      date: '2009 - Al presente',
      title: 'Nos centramos en la atención médica',
      content: [
        'Conozca su reclamo: Primera solución de modelado predictivo para el fraude en el cuidado de la salud',
        'Conozca a su proveedor: Primera solución automatizada de prevención de fraudes de atención al cliente',
        'Primera tecnología de formularios sociales de la industria'
      ]
    }
  ];

  constructor() { }

  onDotClick(dotId: string): void {
    const inside = document.querySelector('.inside') as HTMLElement;
    const widthMap: { [key: string]: string } = {
      'one': '20%',
      'two': '50%',
      'three': '75%'
    };

    if (inside) {
      inside.style.width = widthMap[dotId] || '0%';
      inside.style.transition = 'width 0.5s';
    }

    const selectedData = this.timelineData.find(data => data.id === dotId);
    if (selectedData) {
      this.currentTitle = selectedData.title;
      this.currentContent = selectedData.content; // Cambia a array
    }

    if (this.switch1 && !this.switch1.nativeElement.checked) {
      this.showModal = true;
      this.modalClass = dotId;
    } else {
      this.showModal = false;
    }
  }

  onSwitchChange(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      this.showModal = false;
      this.modalClass = 'nobox';
    } else {
      this.showModal = true;
      this.modalClass = '';
    }
  }

  ngOnInit(): void {
    // Initialize with the first item by default
    const firstItem = this.timelineData[0];
    this.currentTitle = firstItem.title;
    this.currentContent = firstItem.content; // Cambia a array
  }
}
