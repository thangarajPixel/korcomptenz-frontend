<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: monospace;
            font-size: 12px;
            background-color: black;
            color: #d4d4d4;
            margin: 0;
            padding: 10px;
            line-height: 1.3;
          }
          
          .header {
            color: #f3f3f3ff;
            font-size: 15.5px;
            margin-bottom: 10px;
            padding-bottom: 5px;
            font-family: "Times New Roman", Times, serif;
            border-bottom: 2px solid #f3f3f3ff;
            font-weight: 500;
          }
          
          .breadcrumb {
            color: #569cd6;
            margin-bottom: 10px;
            padding: 6px 0;
            font-size: 12px;
            border: none;
          }
          
          .breadcrumb a {
            color: #569cd6;
            text-decoration: underline;
            margin: 0 2px;
          }
          
          .breadcrumb a:hover {
            color: #9cdcfe;
          }
          
          .breadcrumb-separator {
            color: #d4d4d4;
            margin: 0 4px;
          }
          
          .xml-line {
            margin: 0;
            padding: 0;
            white-space: pre;
          }
          
          .tag-bracket {
            color: #808080;
          }
          
          .tag-name {
            color: #569cd6;
          }
          
          .attr-name {
            color: #9cdcfe;
          }
          
          .attr-value {
            color: #ce9178;
          }
          
          .text-content {
            color: #d4d4d4;
          }
          
          .url-link {
            color: #d4d4d4;
            text-decoration: none;
            cursor: pointer;
          }
          
          .url-link:hover {
            text-decoration: underline;
          }
          
          .arrow {
            color: #808080;
            user-select: none;
            cursor: pointer;
            display: inline-block;
            width: 10px;
            font-size: 10px;
          }
          
          .collapsible-content {
            display: block;
          }
          
          .collapsed {
            display: none;
          }
          
          .indent-1 { margin-left: 0; padding-left: 20px; }
          .indent-2 { margin-left: 0; padding-left: 40px; }
          .indent-3 { margin-left: 0; padding-left: 60px; }
        </style>
        <script type="text/javascript">
          <![CDATA[
          function toggleCollapse(id) {
            var element = document.getElementById(id);
            var arrow = document.getElementById('arrow-' + id);
            if (element.classList.contains('collapsed')) {
              element.classList.remove('collapsed');
              arrow.textContent = '▼';
            } else {
              element.classList.add('collapsed');
              arrow.textContent = '▶';
            }
          }
          
          function navigateToPath(url) {
            var currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('path', url);
            
            // Use History API to hide query params in URL bar
            window.history.pushState({path: url}, '', '/sitemap.xml');
            
            // Fetch and reload with new path
            fetch(currentUrl.toString())
              .then(response => response.text())
              .then(data => {
                document.open();
                document.write(data);
                document.close();
              });
          }
          
          function navigateToRoot() {
            var currentUrl = new URL(window.location.href);
            currentUrl.searchParams.delete('path');
            
            // Use History API to keep clean URL
            window.history.pushState({}, '', '/sitemap.xml');
            
            // Fetch and reload root
            fetch(currentUrl.toString())
              .then(response => response.text())
              .then(data => {
                document.open();
                document.write(data);
                document.close();
              });
          }
          
          // Handle browser back/forward buttons
          window.addEventListener('popstate', function(event) {
            if (event.state && event.state.path) {
              var currentUrl = new URL(window.location.origin + '/sitemap.xml');
              currentUrl.searchParams.set('path', event.state.path);
              fetch(currentUrl.toString())
                .then(response => response.text())
                .then(data => {
                  document.open();
                  document.write(data);
                  document.close();
                });
            } else {
              location.reload();
            }
          });
          ]]>
        </script>
      </head>
      <body>
        <div class="header">
          This XML file does not appear to have any style information associated with it. The document tree is shown below.
        </div>
        
        <xsl:variable name="currentPath" select="substring-after(substring-before(concat(/processing-instruction('xml-stylesheet'), '?'), '?'), 'path=')" />
        
     
        
        <div class="xml-line">
          <span class="arrow">▼</span>
          <span class="tag-bracket">&lt;</span>
          <span class="tag-name">urlset</span>
          <span class="attr-name"> xmlns</span>
          <span class="tag-bracket">=</span>
          <span class="attr-value">"http://www.sitemaps.org/schemas/sitemap/0.9"</span>
          <span class="tag-bracket">&gt;</span>
        </div>
        
        <xsl:for-each select="sitemap:urlset/sitemap:url">
          <xsl:variable name="url-id" select="concat('url-', position())" />
          <xsl:variable name="has-children" select="sitemap:hasChildren = 'true'" />
          
          <div class="xml-line indent-1">
            <span class="arrow" id="arrow-{$url-id}" onclick="toggleCollapse('{$url-id}')">▼</span>
            <span class="tag-bracket">&lt;</span>
            <span class="tag-name">url</span>
            <span class="tag-bracket">&gt;</span>
          </div>
          
          <div id="{$url-id}" class="collapsible-content">
            <div class="xml-line indent-2">
              <span class="tag-bracket">&lt;</span>
              <span class="tag-name">loc</span>
              <span class="tag-bracket">&gt;</span>
              <xsl:choose>
                <xsl:when test="$has-children">
                  <a class="url-link" href="javascript:navigateToPath('{sitemap:loc}')">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </xsl:when>
                <xsl:otherwise>
                  <span class="text-content">
                    <xsl:value-of select="sitemap:loc"/>
                  </span>
                </xsl:otherwise>
              </xsl:choose>
              <span class="tag-bracket">&lt;/</span>
              <span class="tag-name">loc</span>
              <span class="tag-bracket">&gt;</span>
            </div>
            
            <xsl:if test="sitemap:lastmod">
              <div class="xml-line indent-2">
                <span class="tag-bracket">&lt;</span>
                <span class="tag-name">lastmod</span>
                <span class="tag-bracket">&gt;</span>
                <span class="text-content"><xsl:value-of select="sitemap:lastmod"/></span>
                <span class="tag-bracket">&lt;/</span>
                <span class="tag-name">lastmod</span>
                <span class="tag-bracket">&gt;</span>
              </div>
            </xsl:if>
            
            <xsl:if test="sitemap:changefreq">
              <div class="xml-line indent-2">
                <span class="tag-bracket">&lt;</span>
                <span class="tag-name">changefreq</span>
                <span class="tag-bracket">&gt;</span>
                <span class="text-content"><xsl:value-of select="sitemap:changefreq"/></span>
                <span class="tag-bracket">&lt;/</span>
                <span class="tag-name">changefreq</span>
                <span class="tag-bracket">&gt;</span>
              </div>
            </xsl:if>
            
            <xsl:if test="sitemap:priority">
              <div class="xml-line indent-2">
                <span class="tag-bracket">&lt;</span>
                <span class="tag-name">priority</span>
                <span class="tag-bracket">&gt;</span>
                <span class="text-content"><xsl:value-of select="sitemap:priority"/></span>
                <span class="tag-bracket">&lt;/</span>
                <span class="tag-name">priority</span>
                <span class="tag-bracket">&gt;</span>
              </div>
            </xsl:if>
          </div>
          
          <div class="xml-line indent-1">
            <span class="tag-bracket">&lt;/</span>
            <span class="tag-name">url</span>
            <span class="tag-bracket">&gt;</span>
          </div>
        </xsl:for-each>
        
        <div class="xml-line">
          <span class="tag-bracket">&lt;/</span>
          <span class="tag-name">urlset</span>
          <span class="tag-bracket">&gt;</span>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
