<?xml version="1.0" encoding="UTF-8"?>
<WebServiceRequestEntity>
   <description></description>
   <name>sendTwoWithdrawals</name>
   <tag></tag>
   <elementGuidId>cf52524f-3512-4684-a12c-dba9c9080718</elementGuidId>
   <selectorMethod>BASIC</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <connectionTimeout>0</connectionTimeout>
   <followRedirects>false</followRedirects>
   <httpBody></httpBody>
   <httpBodyContent>{
  &quot;text&quot;: &quot;[\n  {\n    \&quot;amount\&quot;: ${amount},\n    \&quot;executeAt\&quot;: \&quot;${executeAt}\&quot;\n  },\n  {\n    \&quot;amount\&quot;: ${amount2},\n    \&quot;executeAt\&quot;: \&quot;${executeAt2}\&quot;\n  }\n]&quot;,
  &quot;contentType&quot;: &quot;application/json&quot;,
  &quot;charset&quot;: &quot;UTF-8&quot;
}</httpBodyContent>
   <httpBodyType>text</httpBodyType>
   <httpHeaderProperties>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>Content-Type</name>
      <type>Main</type>
      <value>application/json</value>
   </httpHeaderProperties>
   <katalonVersion>8.0.1</katalonVersion>
   <maxResponseSize>0</maxResponseSize>
   <migratedVersion>5.4.1</migratedVersion>
   <restRequestMethod>POST</restRequestMethod>
   <restUrl>http://localhost:7070/v1/withdrawals/users/${userId}/payment-methods/${paymentMethodId}</restUrl>
   <serviceType>RESTful</serviceType>
   <soapBody></soapBody>
   <soapHeader></soapHeader>
   <soapRequestMethod></soapRequestMethod>
   <soapServiceEndpoint></soapServiceEndpoint>
   <soapServiceFunction></soapServiceFunction>
   <socketTimeout>0</socketTimeout>
   <useServiceInfoFromWsdl>true</useServiceInfoFromWsdl>
   <variables>
      <defaultValue>1</defaultValue>
      <description></description>
      <id>6e1e0844-0737-40d9-b431-17c4139167c7</id>
      <masked>false</masked>
      <name>userId</name>
   </variables>
   <variables>
      <defaultValue>1</defaultValue>
      <description></description>
      <id>cd999833-7446-4309-8779-72efca1f67f4</id>
      <masked>false</masked>
      <name>paymentMethodId</name>
   </variables>
   <variables>
      <defaultValue>1</defaultValue>
      <description></description>
      <id>2cc3545d-62dd-474e-a01a-56fefaf5f6e7</id>
      <masked>false</masked>
      <name>amount</name>
   </variables>
   <variables>
      <defaultValue>'2021-05-30T17:16:46.399Z'</defaultValue>
      <description></description>
      <id>f7a7fa05-e7d4-4644-bc98-25f152236729</id>
      <masked>false</masked>
      <name>executeAt</name>
   </variables>
   <variables>
      <defaultValue>1</defaultValue>
      <description></description>
      <id>77918d1d-6e89-47d7-a79e-c7dd7458b609</id>
      <masked>false</masked>
      <name>amount2</name>
   </variables>
   <variables>
      <defaultValue>'2021-05-30T17:16:46.399Z'</defaultValue>
      <description></description>
      <id>ca05fb4d-e1f8-4f74-a26e-95cf4bab223d</id>
      <masked>false</masked>
      <name>executeAt2</name>
   </variables>
   <verificationScript>import static org.assertj.core.api.Assertions.*

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webservice.verification.WSResponseManager

import groovy.json.JsonSlurper
import internal.GlobalVariable as GlobalVariable

RequestObject request = WSResponseManager.getInstance().getCurrentRequest()

ResponseObject response = WSResponseManager.getInstance().getCurrentResponse()


assertThat(response.getResponseText()).contains('PENDING')</verificationScript>
   <wsdlAddress></wsdlAddress>
</WebServiceRequestEntity>
