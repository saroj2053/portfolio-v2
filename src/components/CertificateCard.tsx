import type { Certificate } from '@/types'

const CertificateCard = ({ cert, index } : { cert: Certificate, index: number }) => {
  return (
    
    <div
                  key={cert.name}
                  className="reveal brutal-card-accent p-5"
                  style={{ transitionDelay: `${index * 100 + 100}ms` }}
                >
                  {/* Badge */}
                  <div className="w-18 h-8 bg-primary border-2 border-background flex items-center justify-center mb-4">
                    <span className="font-['Ovo'] text-xs font-bold text-cream tracking-wider">
                      {cert.badge}
                    </span>
                  </div>

                  <h4 className="font-['Lato'] font-bold text-sm text-foreground dark:text-foreground leading-snug mb-1">
                    {cert.name}
                  </h4>
                  <div className="font-['Ovo'] text-xs font-semibold text-primary">
                    {cert.year}
                  </div>
                </div>
  )
}

export default CertificateCard