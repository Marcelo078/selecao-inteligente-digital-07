import { Layout } from "@/components/Layout";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Política de Privacidade - Seleção Inteligente Digital";
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Política de Privacidade
          </h1>
          <p className="text-lg text-muted-foreground">
            Última atualização: 23 de agosto de 2024
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Informações que Coletamos</h2>
            <p>
              A Seleção Inteligente Digital coleta informações limitadas para melhorar sua experiência de navegação. 
              As informações coletadas incluem dados de navegação anônimos e cookies técnicos necessários para o funcionamento do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Como Usamos suas Informações</h2>
            <p>
              Utilizamos as informações coletadas exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Melhorar a experiência de navegação no site</li>
              <li>Analisar o desempenho e uso do site</li>
              <li>Garantir a segurança e funcionamento adequado da plataforma</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Compartilhamento de Informações</h2>
            <p>
              Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros. 
              As únicas exceções são quando necessário para cumprir a lei ou proteger nossos direitos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência. Você pode desativar os cookies nas configurações 
              do seu navegador, mas isso pode afetar algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Links para Sites de Terceiros</h2>
            <p>
              Nosso site contém links de afiliados para produtos de terceiros. Não somos responsáveis pelas 
              práticas de privacidade desses sites. Recomendamos ler as políticas de privacidade dos sites que você visita.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Segurança</h2>
            <p>
              Implementamos medidas de segurança adequadas para proteger suas informações contra acesso, 
              alteração, divulgação ou destruição não autorizada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Alterações na Política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos revisar esta página regularmente 
              para estar ciente de quaisquer mudanças.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através dos 
              canais disponíveis em nosso site.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;